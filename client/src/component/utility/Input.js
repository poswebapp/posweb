import React from "react";

const Input = ({ placeholder, name, value, type, onChange }) => {
  return (
    <input
      placeholder={placeholder}
      name={name}
      value={value}
      type={type}
      onChange={onChange}
      className="border-2 text-sm p-3 text-zinc-500 w-full font-[500] focus:outline-none focus:border-zinc-500 border-zinc-300 rounded-md "
    />
  );
};

export default Input;
