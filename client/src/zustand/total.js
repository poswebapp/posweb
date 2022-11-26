import create from "zustand";
import {api} from './api'

export const totalStore = create((set) => ({
  total: {},
  monthly: [],
  loading: false,

  getTotal: async () => {
    set({ loading: true });
    try {
      const result = await api.get("/total/get");
      console.log(result)
      set({ total: result.data.result });
    } catch (err) {
      alert(err.response.data.message);
      set({ err: err.response.data.message });
    }
    set({ loading: false });
  },
  
  getMonthly: async () => {
    set({ loading: true });
    try {
      const result = await api.get("/total/getMonthly");
      console.log(result.data)
      set({ monthly: result.data });
    } catch (err) {
      alert(err.response.data.message);
      set({ err: err.response.data.message });
    }
    set({ loading: false });
  },

}));
