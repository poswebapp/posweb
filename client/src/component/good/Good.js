import React, { useEffect } from "react";
import BtnDelete from "../utility/BtnDelete";
import BtnEdit from "../utility/BtnEdit";
import { Table } from "./table";
import { goodStore } from "../../zustand/good";

const Good = () => {
  const tr = "px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap";
  const loading = false;
  const act =
    "px-6 py-4 text-sm font-medium text-gray-800 whitespace-wrap flex flex-rows gap-2";
  const list = goodStore((state) => state.goods);
  const getGood = goodStore((state) => state.getGood);
 useEffect(()=>{
    getGood()
 },[getGood]) 
  
  return (
    <div>
      <Table
        element={
          <>
            {list?.map((a,index) => (
              <tr key={a._id}>
                <td className={tr}> {index+1}  </td>
                <td className={tr}> {a.name} </td>
                <td className={tr}> {a.type} </td>
                <td className={tr}> {a.stock} </td>
                <td className={tr}> {a.unit} </td>
                <td className={tr}> {a.price} </td>
                <td className={tr}> {a._id} </td>
                <td className={act}>
                  <BtnEdit loading={loading} />
                  <BtnDelete loading={loading} />
                </td>
              </tr>
            ))}
          </>
        }
      />
    </div>
  );
};

export default Good;
