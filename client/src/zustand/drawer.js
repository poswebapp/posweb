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

export const drawerStore = create((set) => ({
  drawers: [],
  loading: false,
  err: null,
  total: 0,

  getDrawer: async () => {
    set({ loading: true });
    try {
      const result = await api.get("/drawer/get");
      set({ drawers: result.data });
    } catch (err) {
      console.log(err)
      alert(err.response.data.message);
      set({ err: err.response.data.message });
    }
    set({ loading: false });
  },
  
  getDailyTotal: async () => {
    set({ loading: true });
    try {
      const result = await api.get("/drawer/getDaily");
      set({ total: result.data });
      console.log(result)
    } catch (err) {
      console.log(err)
      alert(err.response.data.message);
      set({ err: err.response.data.message });
    }
    set({ loading: false });
  },

  uploadDrawer: async (data) => {
    set({ loading: true });
    try {
      const result = await api.post("/drawer/upload", data);
      set((state) => ({ drawers: [...state.drawers, result.data] }));
    } catch (err) {
      alert(err.response.data.message);
      set({ err: err.response.data.message });
    }
    set({ loading: false });
  },

  updateDrawer: async (data, id) => {
    set({ loading: true });
    try {
      const result = await api.patch(`/drawer/patch/${id}`, data);
      set((state) => ({
        drawers: [
          ...state.drawers.map((a) => (a._id === id ? result.data : a)),
        ],
      }));
    } catch (err) {
      alert(err.response.data.message);
      set({ err: err.response.data.message });
    }
    set({ loading: false });
  },

  deleteDrawer: async (id) => {
    set({ loading: true });
    try {
      await api.delete(`/drawer/delete/${id}`);
      set((state) => ({ drawers: state.drawers.filter((a) => a._id !== id) }));
    } catch (err) {
      alert(err.response.data.message);
      set({ err: err.response.data.message });
    }
    set({ loading: false });
  },
}));
