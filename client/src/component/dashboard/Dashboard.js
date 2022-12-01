import React, { useEffect } from "react";
import Layout from "../Layout";
import Chart from "./Chart";
import ReportChart from "./ReportChart";
import TopContent from "./TopContent";
import { totalStore } from "../../zustand/total";
import Loading from "../Loading";
import Recent from "./Recent";

const Dashboard = () => {
  const loading = totalStore((state) => state.loading);
  const getMonthly = totalStore((state) => state.getMonthly);
  const monthly = totalStore((state) => state.monthly);
  useEffect(() => {
    getMonthly();
  }, [getMonthly]);
  return (
    <Layout
      element={
        <div className="flex flex-col justify-center content-center w-full h-auto">
          {loading && <Loading />}
          <div className="mx-auto bg-white shadow-md rounded-xl flex flex-col flex-wrap h-auto w-full p-4 border border-zinc-300 gap-y-5">
            <TopContent />
            <span className="flex w-auto justify-between gap-5 flex-row">
              <Chart />
              <Recent />
            </span>
            <ReportChart list={monthly} />
          </div>
          {/* minimum stock  */}
          {/* recent */}
        </div>
      }
    />
  );
};

export default Dashboard;
