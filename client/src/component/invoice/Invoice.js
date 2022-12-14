import React, { useEffect, useState } from "react";
import Form from "./Form";
import List from "./List";
import { invoiceStore } from "../../zustand/invoice";
import Layout from "../Layout";
import autoAnimate from "@formkit/auto-animate";
import Loading from "../Loading";

const Invoice = () => {
  const invoices = invoiceStore((state) => state.invoices);
  const loading = invoiceStore((state) => state.loading);
  const updateInvoice = invoiceStore((state) => state.updateInvoice);
  const uploadInvoice = invoiceStore((state) => state.uploadInvoice);
  
  const [id, setid] = useState(0);
  const [list, setlist] = useState(null);
  const [show, setshow] = useState(false);
  const [data, setdata] = useState({
    date: "",
    quantity: "",
    amount: "",
    transactionNo: "",
    invoiceNo: "",
  });

  const dom = React.useRef(null);
  useEffect(() => {
    dom.current && autoAnimate(dom.current);
  }, [dom]);

  const clear = () => {
    setid(0);
    setlist(null);
    setdata({
      date: "",
      time: "",
      quantity: "",
      amount: "",
      transactionNo: "",
      invoiceNo: "",
    });
  };

  
  useEffect(() => {
    setlist(id ? invoices.find((r) => r._id === id) : null);
  }, [invoices, id]);

  useEffect(() => {
    if (list) setdata(list);
  }, [id, list]);

  const handleChange = (e) => {
    console.log(e.target.value)
    setdata({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
   console.log(data) 
    if (id === 0) {
      if (
        data.date === "" ||
        data.transactionNo === "" ||
        data.invoiceNo === "" ||
        data.quantity === "" ||
        data.amount === ""
      ) {
        alert("Complete Form input");
      } else {
        await uploadInvoice(data);
        clear();
      }
    } else {
      await updateInvoice(data, id);
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
          {loading && <Loading />}
          <List setid={setid} setshow={setshow} />
        </div>
      }
    />
  );
};

export default Invoice;
