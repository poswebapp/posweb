import React from "react";

const TopContent = () => {
  
  return (
    <content className="flex flex-row justify-between content-start grid-cols-4 gap-8 w-full mx-auto h-auto">
      <Content name={"Total Goods"} value={130} border={"border-cyan-600"} />
      <Content name={"Total Suppliers"} value={8} border={"border-amber-600"} />
      <Content name={"Stocks of Goods"} value={130} border={"border-violet-400"} />
      {/* <Content name={"Total Earnings(til date)"} value={130} border={"border-rose-500"} /> */}
    </content>
  );
};

export default TopContent;

export const Content = ({ name, value, border }) => {
  return (
    <span className={`flex justify-start content-apart  border-l-8 bg-zinc-100 h-24 w-40 shadow-md rounded-lg p-4 text-md font-bold text-zinc-600 ${border}`}>
      <span className="grid gap-2">
        <h4 className="text-zinc-500 font-[500] rale text-sm w-full whitespace-wrap">{name}</h4>
        <p>{value}</p>
      </span>
    </span>
  );
};
