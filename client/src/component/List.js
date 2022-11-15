import { CashIcon } from "@heroicons/react/solid";
import { ShoppingCartIcon } from "@heroicons/react/solid";
import React from "react";
import { XCircleIcon } from "@heroicons/react/solid";
import { PencilAltIcon } from "@heroicons/react/solid";
import { useListStore } from "../zustand/listStore";

const List = ({ list, setId, setShowForm,update}) => {
  const deleteList = useListStore((state) => state.deleteList);
  const profit = list.tag === "profit";
  const icon = "w-8 text-black m-auto";

  const handlePatch = () => {
    setId(list.id);
    setShowForm(true)
  };

  return (
    <div
      className="p-3 py-2 rounded-md bg-white h-min shadow-sm border border-gray-200 w-max-min w-screen max-w-sm flex flex-wrap justify-between"
      id={list._id}
    >
      <span className="flex gap-1">
        <span
          className={`h-max flex center rounded-md w-max-min p-1 mr-2 border-2 my-auto
        ${profit ? "bg-primary" : "bg-orange"}`}
        >
          {profit ? (
            <CashIcon className={icon} />
          ) : (
            <ShoppingCartIcon className={icon} />
          )}
        </span>
        <span className="">
          <h4 className="font-semibold text-xs text-gray-600"> {list.name} </h4>
          <p className="text-xs text-gray-500">Php {list.price}</p>

          <p className="truncate text-gray-400 text-xs">{list.date}</p>
        </span>
      </span>
      <span className="grid grid-cols-1 gap-2">
        <XCircleIcon
          className="w-4 text-gray-400 "
          onClick={() => deleteList(list.id)}
        />
    {update && <PencilAltIcon className="w-4 text-gray-400 " onClick={handlePatch} />}
      </span>
    </div>
  );
};


export default List;
