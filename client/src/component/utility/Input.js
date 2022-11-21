import React from "react";

const Input = ({ placeholder, name, value, type }) => {
  return (
    <input placeholder={placeholder} name={name} value={value} type={type}
    className="border-2 text-sm p-3 text-zinc-500 w-full "/>
  );
};

export default Input;
