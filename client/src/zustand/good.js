import create from "zustand";
import axios from "axios";

const API = axios.create({ baseURL: "https://web--end.herokuapp.com" });
// const API = axios.create({ baseURL: "http://localhost:5000" });

API.interceptors.request.use((req) => {
  if (localStorage.getItem("profile")) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem("profile")).token
    }`;
  }
  return req;
});

export const useListStore = create((set) => ({
  lists: [],
  filteredList: [],
  isLoading: false,
  isError: false,

  searchLists: (search) => {
    console.log("search:", search);
    set((state) => ({
      lists: state.lists.filter(
        (list) =>
          list.name.includes(search) ||
          list.price.includes(search) ||
          list.date.includes(search) ||
          list.tag.includes(search)
      ),
    }));
  },

  createList: async (data) => {
    set({ isLoading: true });
    try {
        let s4 = () => {
          return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
        };
      set((state) => ({ lists: [{...data,id: s4()}, ...state.lists] }));
    } catch (err) {
      console.log(err.message);
    }
    set({ isLoading: false });
  },

  // updateList: async (updatedList, id) => {
  //   set({ isLoading: true });
  //   try {
  //     const { data } = await API.patch(`/list/${id}`, updatedList);
  //     set((state) => ({
  //       lists: state.lists.map((list) => (list._id === id ? data : list)),
  //     }));
  //   } catch (err) {
  //     console.log(err.message);
  //   }
  //   set({ isLoading: false });
  // },

  deleteList: async (id) => {
    set({ isLoading: true });
    try {
      set((state) => ({
        lists: state.lists.filter((list) => list.id !== id),
      }));
    } catch (err) {
      console.log(err.message);
    }
    set({ isLoading: false });
  },

  setListByFilter: (data) => {
    set({ filteredList: data });
  },
}));
