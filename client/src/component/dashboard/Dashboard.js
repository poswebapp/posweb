import React from "react";
import Layout from "../Layout";
import Chart from "./Chart";
import TopContent from "./TopContent";

const Dashboard = () => {
  return (
    <Layout
      element={
        <div className="flex justify-center mx-auto mt-[5%] content-start w-auto gap-5">
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
