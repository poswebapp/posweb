import FormInput from "./input/FormInput";
import Tag from "./input/Tag";
import DateInput from "./input/Date";
import { useEffect, useState } from "react";
import { useListStore } from "../zustand/listStore";
import curDate from "./input/curDate";

const Form = ({ id, setId, setShowForm }) => {
  const createList = useListStore((state) => state.createList);
  const isLoading = useListStore((state) => state.isLoading);
  // const updateList = useListStore((state) => state.updateList);
  const lists = useListStore((state) => state.lists);

  const [form, setForm] = useState({
    id: "",
    name: "",
    price: "",
    tag: "",
    date: curDate,
  });
  const list = id ? lists.find((a) => a._id === id) : form;

  useEffect(() => {
    setForm(list);
  }, [list]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.name === "" || form.tag === "") {
      alert("please ensure all input are valid");
    } else {
      if (!id || id === 0) {
        // setForm({ ...form, id: nId });
        createList(form);
        clear();
      }
      // updateList(form, id);
      console.log("patch");
      clear();
    }
  };

  const clear = () => {
    setForm({ id: "", name: "", price: "", tag: "", date: new Date(curDate) });
    setId(0);
    setShowForm(false);
  };

  return (
    <div className="smoke w-full h-full z-80 fixed top-0 left-0 right-0">
      <div className="p-3 w-80 bg-white rounded-lg border border-grey-200 flex flex-wrap justify-between align-center gap-2 mt-5 shadow-md mx-auto fixed z-90 bottom-20 right-4">
        <FormInput
          name="name"
          value={form.name}
          type="text"
          on={"on"}
          handleChange={handleChange}
        />
        <FormInput
          name="price"
          value={form.price}
          type="number"
          autoFocus={"off"}
          handleChange={handleChange}
        />
        <Tag form={form} handleChange={handleChange} />
        <DateInput handleChange={handleChange} date={curDate} />

        <button
          onClick={handleSubmit}
          className={` w-min-max px-4 py-2  rounded-full font-semibold h-max text-sm border-2
          ${
            isLoading
              ? "bg-none text-gray-400 border-2 border-grey-400"
              : "bg-green text-black"
          }`}
          disable={isLoading.toString()}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default Form;
