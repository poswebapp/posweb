import React, { useEffect, useState } from "react";
import Form from "./Form";
import List from "./List";
import { invoiceStore } from "../../zustand/invoice";
import Layout from "../Layout";
// import autoAnimate from "@formkit/auto-animate";
import Loading from "../Loading";
import PagesTitle from "../utility/PagesTitle";
import { ToastContainer } from "react-toastify";
import { errNotify, okNotify } from "../utility/alert";

const Invoice = () => {
  const invoices = invoiceStore((state) => state.invoices);
  const loading = invoiceStore((state) => state.loading);
  const updateInvoice = invoiceStore((state) => state.updateInvoice);
  const uploadInvoice = invoiceStore((state) => state.uploadInvoice);

  const [id, setid] = useState(0);
  const [list, setlist] = useState(null);
  const [show, setshow] = useState(false);
  const [data, setdata] = useState({
    // date: "",
    quantity: "",
    time: "",
    amount: "",
    // transactionNo: "",
    // invoiceNo: "",
  });

  // const dom = React.useRef(null);
  // useEffect(() => {
  //   dom.current && autoAnimate(dom.current);
  // }, [dom]);
 

  const clear = () => {
    setid(0);
    setlist(null);
    setdata({
      // date: "",
      time: "",
      quantity: "",
      amount: "",
      // transactionNo: "",
      // invoiceNo: "",
    });
  };

  useEffect(() => {
    setlist(id ? invoices.find((r) => r._id === id) : null);
  }, [invoices, id]);

  useEffect(() => {
    if (list) setdata(list);
  }, [id, list]);

  const handleChange = (e) => {
    setdata({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (id === 0) {
      if (
        // data.date === "" ||
        data.quantity === "" ||
        data.amount === "" ||
        data.time === ""
      ) {
        errNotify("Complete Form input");
      } else {
        await uploadInvoice(data,okNotify,errNotify);
        clear();
      }
    } else {
      await updateInvoice(data, id, okNotify,errNotify);
      clear();
    }
  };

  return (
    <Layout
      element={
        // <div className="grid pt-20" ref={dom}>
        <div className="grid pt-20">
         <ToastContainer/> 
          <PagesTitle text={"invoice"} />
          <button
            className="p-4 border-2 rounded-md text-white border-zinc-800 text-sm font-[400] bg-zinc-800 m-auto transition-all duration-300 ease-linear fixed right-10 bottom-10 z-50"
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
