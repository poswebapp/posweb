import React, { useRef, useState } from "react";
import ReactToPrint from "react-to-print";

const Table = ({ element, total }) => {
  const [cash, setcash] = useState(0);
  const [out, setout] = useState(0);
  const [onhand, setonhand] = useState(0);
  let componentRef = useRef();
  const th = "px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase";
  return (
    <div className=" bg-white shadow-md rounded-md flex flex-col mt-10 mx-auto p-2 w-auto">
      <ReactToPrint
        trigger={() => (
          <button className="p-4 border-2 rounded-md text-white border-zinc-700 text-sm font-[600] bg-zinc-700  mr-5 mt-4 m-auto transition-all duration-300 ease-linear">
            Print this out!
          </button>
        )}
        content={() => componentRef}
      />

      <span ref={(el) => (componentRef = el)}>
        <span className="flex flex-row justify-start gap-10">
          <Content
            border={"border-amber-800"}
            name={"Daily Total"}
            value={total}
          />
          <Input
            border={"border-cyan-800"}
            name={"Drawer Cash"}
            value={cash}
            onChange={(e) => setcash(e.target.value)}
          />
          <Input
            border={"border-slate-800"}
            name={"Cash Out"}
            value={out}
            onChange={(e) => setout(e.target.value)}
          />
          <Input
            border={"border-yellow-800"}
            name={"On Hand"}
            value={onhand}
            onChange={(e) => setonhand(e.target.value)}
          />
          <Content
            border={"border-rose-800"}
            name={total - cash - out - onhand <= 0 ? "Deficiet" : "Gain"}
            value={total - cash - out - onhand}
          />
        </span>

        <div className="overflow-x-scroll">
          <div className="p-1.5 w-full inline-block align-middle">
            <div className="overflow-x-scroll border rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className={th}>
                      Transaction No
                    </th>
                    <th scope="col" className={th}>
                      Invoice No
                    </th>
                    <th scope="col" className={th}>
                      Date
                    </th>
                    <th scope="col" className={th}>
                      Time
                    </th>
                    <th scope="col" className={th}>
                      Quantity
                    </th>
                    <th scope="col" className={th}>
                      Amount
                    </th>
                    <th scope="col" className={th}>
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">{element}</tbody>
              </table>
            </div>
          </div>
        </div>
      </span>
    </div>
  );
};

export default Table;

export const Content = ({ name, value, border }) => {
  return (
    <span
      className={`flex justify-start content-between border-l-[.8rem] border bg-zinc-100 h-20 my-4 ml-2 w-36 shad rounded-lg p-4 text-md font-bold text-zinc-600 ${border}`}
    >
      <span className="grid gap-2">
        <h4 className="text-zinc-500 font-[500] rale text-sm w-full whitespace-wrap">
          {name}
        </h4>
        <p>{value}</p>
      </span>
    </span>
  );
};

export const Input = ({ name, value, border, onChange }) => {
  return (
    <span
      className={`flex justify-start content-between border-l-[.8rem] border bg-zinc-100 h-20 my-4 ml-2 w-36 shad rounded-lg p-4 px-2 text-md font-bold text-zinc-600 ${border}`}
    >
      <span className="grid gap-2">
        <h4 className="text-zinc-500 font-[500] rale text-sm w-full whitespace-wrap">
          {name}
        </h4>
        <input
          value={value}
          type="number"
          onChange={onChange}
          className="border border-zinc-300 bg-none w-20 px-2"
        />
      </span>
    </span>
  );
};
