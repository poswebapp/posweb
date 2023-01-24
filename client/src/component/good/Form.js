import React from "react";
import Input from "../utility/Input";
import { goodStore } from "../../zustand/good";

const Form = ({ currentId, data, onChange , onSubmit }) => {
  
  const loading = goodStore((state) => state.loading);
  return (
    <span className=" z-30 fixed top-0 w-screen h-screen left-0 flex justify-center content-center bg-zinc-800/20 backdrop-blur-sm">
    <form className="w-[20rem] grid gap-2 h-auto p-4 place-content-start bg-white border rounded-lg m-auto shadow-md">
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
        placeholder={"Type"}
        name={"type"}
        value={data.type}
        type={"text"}
        onChange={onChange}
      />
      <Input
        placeholder={"Stock"}
        name={"stock"}
        value={data.stock}
        type={"number"}
        onChange={onChange}
      />
      <Input
        placeholder={"Unit"}
        name={"unit"}
        value={data.unit}
        type={"text"}
        onChange={onChange}
      />
      <Input
        placeholder={"Price"}
        name={"price"}
        value={data.price}
        type={"number"}
        onChange={onChange}
      />
    
      <button
        type="submit"
        disabled={loading}
        className={`p-3 px-4 font-[500] text-md border-2 rounded-md bg-zinc-800 mt-3 text-white mr-0 m-auto ${loading && "animate-pulse"}`}
        onClick={onSubmit}
      >
        {loading ? "Processing" : "Submit"}
      </button>
    </form>
    </span>
  );
};

export default Form;
