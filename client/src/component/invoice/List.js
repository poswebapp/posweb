import React, { useEffect, useState } from "react";
import BtnDelete from "../utility/BtnDelete";
import BtnEdit from "../utility/BtnEdit";
import Btn from "../utility/Btn";
import BtnCancel from "../utility/BtnCancel";
import Table from "./Table";
import { invoiceStore } from "../../zustand/invoice";
import Moment from "react-moment";
import Filter from "./Filter";
import { errNotify, warnNotify } from "../utility/alert";

const List = ({ setid, setshow }) => {
  const tr = "px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap ";
  const act =
    "px-6 py-4 text-sm font-medium text-gray-800 whitespace-wrap flex flex-rows gap-2";
  const invoices = invoiceStore((state) => state.invoices);
  const loading = invoiceStore((state) => state.loading);
  const total = invoiceStore((state) => state.total);
  const getInvoice = invoiceStore((state) => state.getInvoice);
  const getYear = invoiceStore((state) => state.getYear);
  const getDailyTotal = invoiceStore((state) => state.getDailyTotal);
  const deleteInvoice = invoiceStore((state) => state.deleteInvoice);

  const [filter, setfilter] = useState("month");

  useEffect(() => {
    if (filter === "month") {
      getInvoice();
    } else if (filter === "year") {
      getYear();
    }
  }, [filter, getInvoice, getYear]);

  useEffect(() => {
    getDailyTotal();
  }, [getDailyTotal, invoices]);

  const [remove, setremove] = useState(false);
  return (
    <div className="w-auto grid mx-auto">
      <Filter filter={filter} setfilter={setfilter} />
      <Table
        total={total}
        element={
          <>
            {invoices?.reverse().map((a, index) => (
              <tr key={a._id}>
                {/* <td className={tr}> {index+1} </td> */}
                <td className={tr}> {a._id}</td>
                <td className={tr}> {a.invoiceNo}</td>
                <td className={tr}>
                  <Moment date={a.date} format="MMM-DD-YYYY" />
                </td>
                <td className={tr}>{a.time}</td>
                <td className={tr}> {a.quantity} </td>
                <td className={tr}> {a.amount} </td>
                <td className={act}>
                  {remove ? (
                    <BtnCancel
                      loading={loading}
                      onClick={() => {
                        setremove(false);
                      }}
                    />
                  ) : (
                    <BtnEdit
                      loading={loading}
                      onClick={() => {
                        setid(a._id);
                        setshow(true);
                        window.scroll(0, 0);
                      }}
                    />
                  )}
                  {remove ? (
                    <BtnDelete
                      loading={loading}
                      onClick={() => {
                        deleteInvoice(a._id, errNotify, warnNotify);
                        setremove(false);
                      }}
                    />
                  ) : (
                    <Btn
                      loading={loading}
                      onClick={() => {
                        setremove(true);
                      }}
                    />
                  )}
                </td>
              </tr>
            ))}
          </>
        }
      />
    </div>
  );
};

export default List;
