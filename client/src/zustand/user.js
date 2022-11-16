import create from "zustand";
import {api} from "./api"

export const userStore = create((set) => ({
  user: [],
  loading: false,
  err: null,

  login: async (formData, navigate) => {
    set({ loading: true });
    try {
      const { data } = await api.post("/user/login", formData);
      localStorage.setItem("profile", JSON.stringify(data));
      navigate("/");
    } catch (err) {
      alert(err.response.data.message)
    }
    set({ loading: false });
  },

  register: async (formData, navigate) => {
    console.log(formData);
    set({ loading: true });
    try {
      const { data } = await api.post("/user/register", formData);
      localStorage.setItem("profile", JSON.stringify(data));
      navigate("/");
    } catch (err) {
      console.log(err.message);
      alert(err.response.data.message)
    }
    set({ loading: false });
  },

  logOut: (navigate) => {
    set({ loading: true });
    try {
      localStorage.clear();
      navigate("/login");
    } catch (err) {
      console.log(err.message);
    }
    set({ loading: false });
  },


}));