import create from "zustand";
import {api} from './api'


api.interceptors.request.use((req) => {
  if (localStorage.getItem("profile")) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem("profile")).token
    }`;
  }
  return req;
});

export const goodStore = create((set) => ({
  goods: [],
  recent: [],
  minimum: {},
  loading: false,
  err: null,

  getGood: async () => {
    set({ loading: true });
    try {
      const result = await api.get("/good/get");
      set({ goods: result.data });
    } catch (err) {
      alert(err.response.data.message);
      set({ err: err.response.data.message });
    }
    set({ loading: false });
  },
  
  getRecentGood: async () => {
    set({ loading: true });
    try {
      const result = await api.get("/good/getRecent");
      set({ recent: result.data });
    } catch (err) {
      alert(err.response.data.message);
      set({ err: err.response.data.message });
    }
    set({ loading: false });
  },
  
  getMinimum: async () => {
    set({ loading: true });
    try {
      const result = await api.get("/good/getMinimum");
      set({ minimum: result.data[0].doc[0] });
    } catch (err) {
      alert(err.response.data.message);
      set({ err: err.response.data.message });
    }
    set({ loading: false });
  },

  uploadGood: async (data) => {
    set({ loading: true });
    try {
      const result = await api.post("/good/upload", data);
      set((state) => ({ goods: [...state.goods, result.data] }));
    } catch (err) {
      alert(err.response.data.message);
      set({ err: err.response.data.message });
    }
    set({ loading: false });
  },

  updateGood: async (data, id) => {
    set({ loading: true });
    try {
      const result = await api.patch(`/good/patch/${id}`, data);
      set((state) => ({
        goods: [
          ...state.goods.map((a) => (a._id === id ? result.data : a)),
        ],
      }));
    } catch (err) {
      alert(err.response.data.message);
      set({ err: err.response.data.message });
    }
    set({ loading: false });
  },

  deleteGood: async (id) => {
    set({ loading: true });
    try {
      await api.delete(`/good/delete/${id}`);
      set((state) => ({ goods: state.goods.filter((a) => a._id !== id) }));
    } catch (err) {
     console.log(err) 
      alert(err.response.data.message);
      set({ err: err.response.data.message });
    }
    set({ loading: false });
  },
}));
