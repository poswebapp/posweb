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

export const incomingStore = create((set) => ({
  incomings: [],
  loading: false,
  err: null,

  getIncoming: async () => {
    set({ loading: true });
    try {
      const result = await api.get("/incoming/get");
      set({ incomings: result.data.reverse() });
    } catch (err) {
      alert(err.response.data.message);
      set({ err: err.response.data.message });
    }
    set({ loading: false });
  },

  uploadIncoming: async (data) => {
    set({ loading: true });
    try {
      const result = await api.post("/incoming/upload", data);
      set((state) => ({ incomings: [...state.incomings, result.data].reverse() }));
    } catch (err) {
      console.log(err)
      alert(err.response.data.message);
      set({ err: err.response.data.message });
    }
    set({ loading: false });
  },

  updateIncoming: async (data, id) => {
    set({ loading: true });
    try {
      const result = await api.patch(`/incoming/patch/${id}`, data);
      set((state) => ({
        incomings: [
          ...state.incomings.map((a) => (a._id === id ? result.data : a)),
        ],
      }));
    } catch (err) {
      alert(err.response.data.message);
      set({ err: err.response.data.message });
    }
    set({ loading: false });
  },

  deleteIncoming: async (id) => {
    set({ loading: true });
    try {
      await api.delete(`/incoming/delete/${id}`);
      set((state) => ({ incomings: state.incomings.filter((a) => a._id !== id) }));
    } catch (err) {
      alert(err.response.data.message);
      set({ err: err.response.data.message });
    }
    set({ loading: false });
  },
}));
