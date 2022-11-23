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

export const supplierStore = create((set) => ({
  suppliers: [],
  loading: false,
  err: null,

  getSupplier: async () => {
    set({ loading: true });
    try {
      const result = await api.get("/supplier/get");
      set({ suppliers: result.data });
    } catch (err) {
      alert(err.response.data.message);
      set({ err: err.response.data.message });
    }
    set({ loading: false });
  },

  uploadSupplier: async (data) => {
    set({ loading: true });
    try {
      const result = await api.post("/supplier/upload", data);
      set((state) => ({ suppliers: [...state.suppliers, result.data] }));
    } catch (err) {
      console.log(err)
      alert(err.response.data.message);
      set({ err: err.response.data.message });
    }
    set({ loading: false });
  },

  updateSupplier: async (data, id) => {
    set({ loading: true });
    try {
      const result = await api.patch(`/supplier/patch/${id}`, data);
      set((state) => ({
        suppliers: [
          ...state.suppliers.map((a) => (a._id === id ? result.data : a)),
        ],
      }));
    } catch (err) {
      alert(err.response.data.message);
      set({ err: err.response.data.message });
    }
    set({ loading: false });
  },

  deleteSupplier: async (id) => {
    set({ loading: true });
    try {
      await api.delete(`/supplier/delete/${id}`);
      set((state) => ({ suppliers: state.suppliers.filter((a) => a._id !== id) }));
    } catch (err) {
      alert(err.response.data.message);
      set({ err: err.response.data.message });
    }
    set({ loading: false });
  },
}));
