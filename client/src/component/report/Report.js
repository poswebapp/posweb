import React, { useEffect } from "react";
import { totalStore } from "../../zustand/total";
import Layout from "../Layout";
import Chart from "./Chart";

const Report = () => {
  const getMonthly = totalStore((state) => state.getMonthly);
  const monthly = totalStore((state) => state.monthly);
  useEffect(() => {
    getMonthly();
  }, [getMonthly]);
  return (
    <Layout
      element={
        <div className="rounded-lg shadow-md border p-8 w-auto h-auto bg-white mt-20">
          <Chart list={monthly} />
        </div>
      }
    />
  );
};

export default Report;
