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

export const expenseStore = create((set) => ({
  expenses: [],
  loading: false,
  err: null,

  getExpense: async () => {
    set({ loading: true });
    try {
      const result = await api.get("/expense/get");
      set({ expenses: result.data });
    } catch (err) {
      alert(err.response.data.message);
      set({ err: err.response.data.message });
    }
    set({ loading: false });
  },
  
  getDailyTotal: async () => {
    set({ loading: true });
    try {
      const result = await api.get("/expense/getDaily");
      set({ total: result.data });
    } catch (err) {
      console.log(err)
      alert(err.response.data.message);
      set({ err: err.response.data.message });
    }
    set({ loading: false });
  },


  uploadExpense: async (data) => {
    set({ loading: true });
    try {
      const result = await api.post("/expense/upload", data);
      set((state) => ({ expenses: [...state.expenses, result.data] }));
    } catch (err) {
      alert(err.response.data.message);
      set({ err: err.response.data.message });
    }
    set({ loading: false });
  },

  updateExpense: async (data, id) => {
    set({ loading: true });
    try {
      const result = await api.patch(`/expense/patch/${id}`, data);
      set((state) => ({
        expenses: [
          ...state.expenses.map((a) => (a._id === id ? result.data : a)),
        ],
      }));
    } catch (err) {
      alert(err.response.data.message);
      set({ err: err.response.data.message });
    }
    set({ loading: false });
  },

  deleteExpense: async (id) => {
    set({ loading: true });
    try {
      await api.delete(`/expense/delete/${id}`);
      set((state) => ({ expenses: state.expenses.filter((a) => a._id !== id) }));
    } catch (err) {
      alert(err.response.data.message);
      set({ err: err.response.data.message });
    }
    set({ loading: false });
  },
}));
