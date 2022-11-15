// import { useState } from "react";
import Form from "./Form";
import List from "./List";
import Loading from "./Loading";
import { PencilAltIcon } from "@heroicons/react/solid";
import { XIcon } from "@heroicons/react/solid";
import { useListStore } from "../zustand/listStore";
import { useState } from "react";

const Home = () => {
  const lists = useListStore((state) => state.lists);
  const isLoading = useListStore((state) => state.isLoading);
  const isError = useListStore((state) => state.isError);
  const getOwnLists = useListStore((state) => state.getOwnLists);


  // const partialList = lists?.slice(0,)
  const [id, setId] = useState(0);
  const [showForm, setShowForm] = useState(false);

  return (
    <>
      <div className="pt-5 px-3 flex flex-wrap justify-around align-center gap-2">
        {isError && <p>something went wrong...</p>}
        {/*if loading or fetching*/}
        {isLoading && <Loading />}
        {/*render list if ok */}
        {lists?.map((list) => (
          <List
            list={list}
            key={list._id}
            setId={setId}
            setShowForm={setShowForm}
            update={true}
          />
        ))}
        <hr className="w-screen" />
        <button
          className="p-2 text-xs text-gray-600 center text-center rounded-full bg-primary font-semibold border-2 shadow-md px-4"
          disable={isLoading}
          onClick={() => getOwnLists(id)}
        >
          refresh
        </button>
      </div>
      {showForm && <Form id={id} setId={setId} setShowForm={setShowForm} />}
      <button
        onClick={() => setShowForm(!showForm)}
        className={`text-gray-600 center text-center rounded-md font-semibold border-2 shadow-md fixed z-90 bottom-5 right-4 drop-shadow-lg flex justify-center p-1 ${
          showForm ? "bg-red-400" : "bg-primary rounded-md"
        }`}
      >
        {showForm ? (
          <XIcon className="w-8 text-gray-600" />
        ) : (
          <PencilAltIcon className="w-8 text-gray-600" />
        )}
      </button>
    </>
  );
};

export default Home;
