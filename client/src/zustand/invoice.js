import create from "zustand";
import { api } from "./api";

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
  total: 0,
  monthly: 0,
  quarterly: 0,
  yearly: 0,

  getInvoice: async () => {
    set({ loading: true });
    try {
      const result = await api.get("/invoice/get");
      set({ invoices: result.data });
    } catch (err) {
      console.log(err);
      alert(err.response.data.message);
      set({ err: err.response.data.message });
    }
    set({ loading: false });
  },

  getDailyTotal: async () => {
    set({ loading: true });
    try {
      const result = await api.get("/invoice/getDaily");
      set({ total: result.data });
    } catch (err) {
      console.log(err);
      alert(err.response.data.message);
      set({ err: err.response.data.message });
    }
    set({ loading: false });
  },

  getMonthlyTotal: async () => {
    set({ loading: true });
    try {
      const result = await api.get("/invoice/getMonthly");
      set({ monthly: result.data });
    } catch (err) {
      console.log(err);
      alert(err.response.data.message);
      set({ err: err.response.data.message });
    }
    set({ loading: false });
  },

  getQuarterlyTotal: async () => {
    set({ loading: true });
    try {
      const result = await api.get("/invoice/getQuarterly");
      set({ quarterly: result.data });
    } catch (err) {
      console.log(err);
      alert(err.response.data.message);
      set({ err: err.response.data.message });
    }
    set({ loading: false });
  },

  getYearlyTotal: async () => {
    set({ loading: true });
    try {
      const result = await api.get("/invoice/getYearly");
      set({ yearly: result.data });
      console.log(result.data)
    } catch (err) {
      console.log(err);
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
      set((state) => ({
        invoices: state.invoices.filter((a) => a._id !== id),
      }));
    } catch (err) {
      alert(err.response.data.message);
      set({ err: err.response.data.message });
    }
    set({ loading: false });
  },
}));
