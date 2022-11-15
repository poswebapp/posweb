import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { userStore } from "../zustand/user";

const Login = () => {
  const navigate = useNavigate() 
  const login = userStore((state) => state.login);
  const loading = userStore((state) => state.loading);
  const [data, setdata] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setdata({ ...data, [e.target.name]: e.target.value });
  };
  const handleSubmit = () => {
    login(data,navigate);
  };

  const input =
    "border border-zinc-400 text-zinc-500 font-[500] text-lg p-4 rounded-lg w-full bg-none my-4";
  return (
    <form className="grid bg-white shadow-md ml-[35%] mt-[20%] m-auto w-[40%] h-auto border-2 border-zinc-400 rounded-lg p-5">
      <h4 className="font-semibold text-zinc-500 text-3xl text-center mb-5">
        Login
      </h4>
      <p className="text-zinc-500 mt-5">username</p>
      <input type="text" name="" onChange={handleChange} className={input} />
      <p className="text-zinc-500 mt-5">password</p>
      <input
        type="password"
        name=""
        onChange={handleChange}
        className={input}
      />
      <button
        type="submit"
        disabled={loading}
        className="p-4 px-8 font-[500] text-md border-2 rounded-md bg-zinc-800 text-white mr-0 mt-8 m-auto"
        onClick={handleSubmit}
      >
        {loading ? "Processing" : "Login"}
      </button>
    </form>
  );
};

export default Login;
