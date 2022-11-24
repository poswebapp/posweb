import React from "react";
import Layout from "../Layout";
import Chart from "./Chart";
import TopContent from "./TopContent";
import { totalStore } from "../../zustand/total";
import Loading from "../Loading";

const Dashboard = () => {
  const loading = totalStore((state) => state.loading);
  return (
    <Layout
      element={
        <div className="flex flex-col justify-center content-start w-full h-full p-4">
          {loading && <Loading />}
          <div className="mx-auto bg-white shadow-md rounded-xl grid min-w-full  h-[auto p-8 border border-zinc-300 gap-y-10">
            <TopContent />
            <Chart />
          </div>
          {/* minimum stock  */}
          {/* recent */}
        </div>
      }
    />
  );
};

export default Dashboard;
