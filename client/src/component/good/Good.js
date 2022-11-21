import React, { useEffect, useState } from "react";
import Form from "./Form";
import List from "./List";
import { goodStore } from "../../zustand/good";
import Layout from "../Layout";

const Good = () => {
  const [id, setid] = useState(null);
  const [list, setlist] = useState(null);
  const [data, setdata] = useState({
    name: "",
    stock: "",
    unit: "",
    price: "",
  });

  const clear = () => {
    setid(0);
    setlist(null);
    setdata({
      name: "",
      stock: "",
      type: "", 
      unit: "",
      price: "",
    });
  };

  const goods = goodStore((state) => state.goods);
  const updateGood = goodStore((state) => state.updateGood);
  const uploadGood = goodStore((state) => state.uploadGood);
  useEffect(() => {
    setlist(id ? goods.find((r) => r._id === id) : null);
  }, [goods, id]);

  useEffect(() => {
    if (list) setdata(list);
  }, [id, list]);

  const handleChange = (e) => {
    setdata({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    if (id === 0) {
      if (
        data.name === "" ||
        data.unit === "" ||
        data.price === "" ||
        data.type === "" ||
        data.stock === ""
      ) {
        alert("Complete Form input");
      } else {
        await uploadGood(data);
        clear();
      }
    } else {
      await updateGood(data, id);
      clear();
    }
  };
  return (
    <Layout element={
    <div className="grid pt-20">
      <Form
        currentId={id}
        data={data}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
      <List setid={setid} />
    </div>}/>
  );
};

export default Good;
