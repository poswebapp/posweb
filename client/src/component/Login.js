import React, { useState } from "react";

const Login = () => {
  const [data, setdata] = useState({
    name: "",
    password: "",
  });
  const handleChange = (e) => {
    setdata();
  };

  const input = "border border-zinc-400 text-zinc-500 font-[500] text-lg p-4 rounded-lg w-full bg-none my-4"
  return (
    <div className="bg-white shadow-md ml-[30%] ml-auto mt-[30%] w-[30rem] h-auto border-2 border-zinc-400 rounded-lg p-5">
      <h4 className="font-semibold text-zinc-500 text-3xl text-center mb-5">Login</h4>
    <p className="text-zinc-500 mt-5">username</p>
      <input
        type="text"
        name=""
        onChange={handleChange}
        className={input}
      />
    <p className="text-zinc-500 mt-5" >password</p>
      <input
        type="password"
        name=""
        onChange={handleChange}
        className={input}
      />
    </div>
  );
};

export default Login;
