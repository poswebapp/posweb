import React from "react";
import TopContent from "./TopContent";

const Dashboard = () => {
  return (
    <div className="grid ml-[24%] mr-[10%] mt-[5%]">
      <div className="bg-white shadow-md rounded-xl grid min-w-full  h-[40rem] p-8 border border-zinc-300">
        <TopContent />
      </div>
    </div>
  );
};

export default Dashboard;
