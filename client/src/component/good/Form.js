import React from "react";
import Input from "../utility/Input";

const Form = ({ currentId, data, onChange }) => {
  return (
    <form className="w-[20rem] grid gap-2 h-auto p-4 place-content-start bg-white border rounded-lg mr-[28%] ml-auto shadow-md">
      <h4 className="text-md text-zinc-500 font-bold ml-2">
        {currentId ? "Update Good" : "Upload Good"}
      </h4>
    <hr className="text-zinc-400 "/>
      <Input
        placeholder={"Name"}
        name={"name"}
        value={data.name}
        type={"text"}
        onChange={onChange}
      />
      <Input
        placeholder={"Stock"}
        name={"stock"}
        value={data.stock}
        type={"text"}
        onChange={onChange}
      />
      <Input
        placeholder={"Unit"}
        name={"unit"}
        value={data.unit}
        type={"number"}
        onChange={onChange}
      />
      <Input
        placeholder={"Price"}
        name={"price"}
        value={data.price}
        type={"number"}
        onChange={onChange}
      />
    </form>
  );
};

export default Form;
