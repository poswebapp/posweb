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

export const invoiceStore = create((set) => ({
  invoices: [],
  loading: false,
  err: null,

  getInvoice: async () => {
    set({ loading: true });
    try {
      const result = await api.get("/invoice/get");
      set({ invoices: result.data });
    } catch (err) {
      console.log(err)
      alert(err.response.data.message);
      set({ err: err.response.data.message });
    }
    set({ loading: false });
  },

  uploadInvoice: async (data) => {
    set({ loading: true });
    try {
      const result = await api.post("/invoice/upload", data);
      set((state) => ({ invoices: [...state.invoices, result.data] }));
    } catch (err) {
      alert(err.response.data.message);
      set({ err: err.response.data.message });
    }
    set({ loading: false });
  },

  updateInvoice: async (data, id) => {
    set({ loading: true });
    try {
      const result = await api.patch(`/invoice/patch/${id}`, data);
      set((state) => ({
        invoices: [
          ...state.invoices.map((a) => (a._id === id ? result.data : a)),
        ],
      }));
    } catch (err) {
      alert(err.response.data.message);
      set({ err: err.response.data.message });
    }
    set({ loading: false });
  },

  deleteInvoice: async (id) => {
    set({ loading: true });
    try {
      await api.delete(`/invoice/delete/${id}`);
      set((state) => ({ invoices: state.invoices.filter((a) => a._id !== id) }));
    } catch (err) {
      alert(err.response.data.message);
      set({ err: err.response.data.message });
    }
    set({ loading: false });
  },
}));
