import create from "zustand";
import axios from "axios";

// const API = axios.create({ baseURL: "https://web--end.herokuapp.com" });
const API = axios.create({ baseURL: "http://localhost:8000" });

API.interceptors.request.use((req) => {
  if (localStorage.getItem("profile")) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem("profile")).token
    }`;
  }
  return req;
});

export const goodStore = create((set) => ({
  goods: [],
  loading: false,
  err: null,

  getGood: async () => {
    console.log("get")
    set({ loading: true });
    try {
      const result = await API.get("/good/get")
      set({goods: result.data})
    } catch (err) {
      console.log(err.message);
      set({ err: err.message });
    }
    set({ loading: false });
  },

  deleteGood: async (id) => {
    set({ loading: true });
    try {
      await API.delete(`/good/delete${id}`);
      set((state) => ({ lists: state.lists.filter((list) => list.id !== id) }));
    } catch (err) {
      console.log(err.message);
      set({ err: err.message });
    }
    set({ loading: false });
  },
}));
