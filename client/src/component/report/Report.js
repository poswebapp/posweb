import React, { useEffect } from "react";
import { totalStore } from "../../zustand/total";
import Layout from "../Layout";
import Chart from "./Chart";
import Loading from "../Loading";

const Report = () => {
  const getMonthly = totalStore((state) => state.getMonthly);
  const monthly = totalStore((state) => state.monthly);
  const loading = totalStore((state) => state.loading);
  useEffect(() => {
    getMonthly();
  }, [getMonthly]);
  return (
    <Layout
      element={
        <span className=" flex flex-col justify-center content start mt-20 gap-5">
          {loading && <Loading />}
          <div className="rounded-lg shadow-md border p-8 w-auto h-auto bg-white">
            <Chart list={monthly} />
          </div>
        </span>
      }
    />
  );
};

export default Report;
