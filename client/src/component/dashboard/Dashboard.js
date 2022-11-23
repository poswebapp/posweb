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
        <div className="flex flex-col justify-center mx-auto mt-[5%] content-start w-auto">
      {loading && <Loading/>  }
          <div className="mx-auto bg-white shadow-md rounded-xl grid min-w-full  h-[40rem] p-8 border border-zinc-300">
            <TopContent />
         <Chart/>
          </div>

        </div>
      }
    />
  );
};

export default Dashboard;
