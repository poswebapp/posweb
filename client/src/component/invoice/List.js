import React, { useEffect } from "react";
import BtnDelete from "../utility/BtnDelete";
import BtnEdit from "../utility/BtnEdit";
import Table from "./Table";
import { invoiceStore } from "../../zustand/invoice";
import Moment from "react-moment";

const List = ({ setid, setshow }) => {
  const tr = "px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap ";
  const act =
    "px-6 py-4 text-sm font-medium text-gray-800 whitespace-wrap flex flex-rows gap-2";
  const invoices = invoiceStore((state) => state.invoices);
  const loading = invoiceStore((state) => state.loading);
  const total = invoiceStore((state) => state.total);
  const getInvoice = invoiceStore((state) => state.getInvoice);
  const getDailyTotal = invoiceStore((state) => state.getDailyTotal);
  const deleteInvoice = invoiceStore((state) => state.deleteInvoice);

  useEffect(() => {
    getInvoice();
  }, [getInvoice]);

  useEffect(() => {
    getDailyTotal();
  }, [getDailyTotal, invoices]);
  console.log("total",total);
  return (
    <div className="w-auto grid mx-auto">
      <Table
        total={total}
        element={
          <>
            {invoices?.reverse().map((a, index) => (
              <tr key={a._id}>
                {/* <td className={tr}> {index + 1} </td> */}
                <td className={tr}> {a.transactionNo} </td>
                <td className={tr}> {a.invoiceNo} </td>
                <td className={tr}>
                  <Moment date={a.date} format="MMM-DD-YYYY" />
                </td>
                <td className={tr}>{a.time}</td>
                <td className={tr}> {a.quantity} </td>
                <td className={tr}> {a.amount} </td>
                <td className={act}>
                  <BtnEdit
                    loading={loading}
                    onClick={() => {
                      setid(a._id);
                      setshow(true);
                      window.scroll(0, 0);
                    }}
                  />
                  <BtnDelete
                    loading={loading}
                    onClick={() => {
                      deleteInvoice(a._id);
                    }}
                  />
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
