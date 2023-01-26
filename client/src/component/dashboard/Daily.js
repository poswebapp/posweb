import React, { useEffect, useState } from 'react'

const Daily = () => {
  const total = 55 
  const [cash, setcash] = useState(0);
  const [out, setout] = useState(0);
  const [onhand, setonhand] = useState(0);
  const [gain, setgain] = useState(0);
  
  useEffect(() => {
    setgain(parseInt(total) + parseInt(cash) - out - onhand);
  }, [cash, onhand, out, total]);
  
  return (
    <div>
        <span className="flex flex-row justify-start gap-10">
          <Content
            border={"border-amber-800"}
            name={"Gross Income"}
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
            name={"Expenses"}
            value={out}
            onChange={(e) => setout(e.target.value)}
          />
          <Input
            border={"border-yellow-800"}
            name={"Net Income"}
            value={onhand}
            onChange={(e) => setonhand(e.target.value)}
          />
          <Content
            border={gain <= 0 ? "border-rose-800 " : "border-green "}
            name={gain <= 0 ? "Daily Deficiet" : "Daily Gain"}
            value={gain}
          />
        </span>
    </div>
  )
}

export default Daily



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
          className="border border-zinc-300 bg-none w-28 px-2"
        />
      </span>
    </span>
  );
};
