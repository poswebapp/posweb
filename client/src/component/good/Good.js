import React from "react";
import BtnDelete from '../utility/BtnDelete'
import BtnEdit from "../utility/BtnEdit";
import { Table } from "./table";

const Good = () => {
  const tr = "px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap";
  const loading = false;
  const act = "px-6 py-4 text-sm font-medium text-gray-800 whitespace-wrap flex flex-rows gap-2";
  return (
    <div>
      <Table
        element={
          <>
            <tr>
              <td className={tr}> 1 </td>
              <td className={tr}> 4e5jsh5dai8aw547bdndn </td>
              <td className={tr}> Gas </td>
              <td className={tr}> Regular </td>
              <td className={tr}> 5 </td>
              <td className={tr}> 4 </td>
              <td className={tr}> 100 </td>
          
            <td className={act}>
              <BtnEdit loading={loading} />
              <BtnDelete loading={loading} />
            </td>
            </tr>

            <tr>
              <td className={tr}> 1 </td>
              <td className={tr}> 4e5jsh5dai8aw547bdndn </td>
              <td className={tr}> Gas </td>
              <td className={tr}> Regular </td>
              <td className={tr}> 5 </td>
              <td className={tr}> 4 </td>
              <td className={tr}> 100 </td>
            <td className={act}>
              <BtnEdit loading={loading} />
              <BtnDelete loading={loading} />
            </td>
            </tr>

            <tr>
              <td className={tr}> 1 </td>
              <td className={tr}> 4e5jsh5dai8aw547bdndn </td>
              <td className={tr}> Gas </td>
              <td className={tr}> Regular </td>
              <td className={tr}> 5 </td>
              <td className={tr}> 4 </td>
              <td className={tr}> 100 </td>
            <td className={act}>
              <BtnEdit loading={loading} />
              <BtnDelete loading={loading} />
            </td>
            </tr>

            <tr>
              <td className={tr}> 1 </td>
              <td className={tr}> 4e5jsh5dai8aw547bdndn </td>
              <td className={tr}> Gas </td>
              <td className={tr}> Regular </td>
              <td className={tr}> 5 </td>
              <td className={tr}> 4 </td>
              <td className={tr}> 100 </td>
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

export default Good;
