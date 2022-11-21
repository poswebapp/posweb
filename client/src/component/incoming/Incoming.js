import React from "react";
import Layout from "../Layout";
import { InTable } from "./table";

const Incoming = () => {
  const tr = "px-5 py-4 text-sm font-medium text-gray-800 whitespace-nowrap";
  return (
    <Layout element={
    <div>
      <InTable
        element={
          <>
            <tr>
              <td className={tr}> 1 </td>
              <td className={tr}> 4e5jsh5dai8aw547bdndn </td>
              <td className={tr}> Gas </td>
              <td className={tr}> Regular </td>
              <td className={tr}> 5 </td>
              <td className={tr}> 4 </td>
              <td className={tr}> employee1 </td>
            </tr>

            <tr>
              <td className={tr}> 1 </td>
              <td className={tr}> 4e5jsh5dai8aw547bdndn </td>
              <td className={tr}> Gas </td>
              <td className={tr}> Regular </td>
              <td className={tr}> 5 </td>
              <td className={tr}> 4 </td>
              <td className={tr}> admin </td>
            </tr>

            <tr>
              <td className={tr}> 1 </td>
              <td className={tr}> 4e5jsh5dai8aw547bdndn </td>
              <td className={tr}> Gas </td>
              <td className={tr}> Regular </td>
              <td className={tr}> 5 </td>
              <td className={tr}> 4 </td>
              <td className={tr}> admin </td>
            </tr>
          </>
        }
      />
    </div>}/>
  );
};

export default Incoming;
