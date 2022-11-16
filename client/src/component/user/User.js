import React from "react";
import { Table } from "./table";
import BtnDelete from "../utility/BtnDelete";
import BtnEdit from "../utility/BtnEdit";

const User = () => {
  const tr = "px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap";
  const act =
    "px-6 py-4 text-sm font-medium text-gray-800 whitespace-wrap flex flex-rows gap-2";
  const loading = false;
  return (
    <div>
      <Table
        element={
          <>
            <tr>
              <td className={tr}> 1 </td>
              <td className={tr}> John Doe </td>
              <td className={tr}> johnDoe </td>
              <td className={tr}> Regular </td>
              <td className={tr}> 09555542814 </td>
              <td className={tr}> Parole </td>
              <td className={act}>
                <BtnEdit loading={loading} />
                <BtnDelete loading={loading} />
              </td>
            </tr>
          
            <tr>
              <td className={tr}> 1 </td>
              <td className={tr}> Jane Batumbakal </td>
              <td className={tr}> batumbakal </td>
              <td className={tr}> Regular </td>
              <td className={tr}> 09555542814 </td>
              <td className={tr}> Role Play </td>
              <td className={act}>
                <BtnEdit loading={loading} />
                <BtnDelete loading={loading} />
              </td>
            </tr>
          </>
        }
      />
    </div>
  );
};

export default User;
