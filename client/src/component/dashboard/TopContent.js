import React from "react";

const TopContent = () => {
  return (
    <content className="grid place-items-start grid-cols-4 gap-5 w-full">
      <Content name={"Total Goods"} value={130} />
      <Content name={"Total Suppliers"} value={8} />
      <Content name={"Stocks of Goods"} value={130} />
      <Content name={"Total Earnings(til date)"} value={130} />
    </content>
  );
};

export default TopContent;

export const Content = ({ name, value }) => {
  return (
    <span className="flex justify-start content-center  border bg-zinc-100 h-30 w-36 shadow-sm rounded-lg p-4 text-sm font-bold text-zinc-500">
      <span className="grid gap-2">
        <h4 className="text-zinc-400 font-[400] rale text-xs w-full truncate">{name}</h4>
        <p>{value}</p>
      </span>
    </span>
  );
};
