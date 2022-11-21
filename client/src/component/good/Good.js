import React, { useEffect, useState } from "react";
import Form from "./Form";
import List from "./List";
import { goodStore } from "../../zustand/good";
import Layout from "../Layout";
import autoAnimate from "@formkit/auto-animate";

const Good = () => {
  const [id, setid] = useState(null);
  const [list, setlist] = useState(null);
  const [show, setshow] = useState(false);
  const [data, setdata] = useState({
    name: "",
    stock: "",
    unit: "",
    price: "",
  });
  
  const dom = React.useRef(null);
  useEffect(() => {
    dom.current && autoAnimate(dom.current);
  }, [dom]);

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
    <Layout
      element={
        <div className="grid pt-20" ref={dom}>
          <button
            className="p-4 border-2 rounded-md text-white border-zinc-800 text-sm font-[400] bg-zinc-800 m-auto transition-all duration-300 ease-linear"
            onClick={() => {
              setshow(!show);
            }}
          >
            {show ? "close" : "Open Form"}
          </button>

          {show && (
            <Form
              currentId={id}
              data={data}
              onChange={handleChange}
              onSubmit={handleSubmit}
            />
          )}
          <List setid={setid} setshow={setshow} />
        </div>
      }
    />
  );
};

export default Good;
