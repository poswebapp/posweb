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
    set({ loading: true });
    try {
      const result = await API.get("/good/get");
      set({ goods: result.data });
    } catch (err) {
      alert(err.message);
      set({ err: err.message });
    }
    set({ loading: false });
  },

  uploadGood: async (data) => {
    set({ loading: true });
    try {
      const result = await API.post("/good/upload", data);
      set((state) => ({ goods: [...state.goods, result.data] }));
    } catch (err) {
      alert(err.message);
      set({ err: err.message });
    }
    set({ loading: false });
  },

  updateGood: async (data, id) => {
    set({ loading: true });
    try {
      const result = await API.patch(`/good/patch/${id}`, data);
      set((state) => ({
        goods: [
          ...state.goods.map((a) => (a._id === id ? result.data : a)),
        ],
      }));
    } catch (err) {
      alert(err.message);
      set({ err: err.message });
    }
    set({ loading: false });
  },

  deleteGood: async (id) => {
    set({ loading: true });
    try {
      await API.delete(`/good/delete/${id}`);
      set((state) => ({ goods: state.goods.filter((a) => a._id !== id) }));
    } catch (err) {
      alert(err.message);
      set({ err: err.message });
    }
    set({ loading: false });
  },
}));
