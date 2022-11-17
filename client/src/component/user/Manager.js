import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { userStore } from "../../zustand/user";

const Manager = () => {
  const navigate = useNavigate() 
  const adminLogin = userStore((state) => state.adminLogin);
  const loading = userStore((state) => state.loading);
  const [data, setdata] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setdata({ ...data, [e.target.name]: e.target.value });
  };
  const handleSubmit = () => {
    adminLogin(data,navigate);
  };

  const input =
    "border border-zinc-400 text-zinc-500 font-[500] text-lg p-4 rounded-lg w-full bg-none my-4";
  return (
    <form className="grid bg-white shadow-md ml-[35%] mt-[15%] m-auto w-[40%] h-auto border-2 border-zinc-400 rounded-lg p-5">
      <h4 className="font-semibold text-zinc-500 text-3xl text-center mb-5">
        Admin
      </h4>
      <p className="text-zinc-500 mt-5">username</p>
      <input type="text" name="username" onChange={handleChange} className={input} />
      <p className="text-zinc-500 mt-5">password</p>
      <input
        type="password"
        name="password"
        onChange={handleChange}
        className={input}
      />
      <button
        type="submit"
        disabled={loading}
        className={`p-4 px-8 font-[500] text-md border-2 rounded-md bg-zinc-800 text-white mr-0 mt-8 m-auto ${loading && "animate-pulse"}`}
        onClick={handleSubmit}
      >
        {loading ? "Processing" : "Manager"}
      </button>
    </form>
  );
};

export default Manager;
