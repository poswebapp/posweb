import { useListStore } from "../zustand/listStore";
import {  useState } from "react";
import List from "./List";
import Loading from "./Loading";
import Empty from "./Empty";
import SearchInput from "./input/SearchInput";
const Search = () => {
  const lists = useListStore((state) => state.lists);
  const isLoading = useListStore((state) => state.isLoading);


  const [search, setSearch] = useState("");
  const handleChange = (e) => {
    setSearch(e.target.value);
  };


  return (
    <div className="flex flex-wrap gap-2 p-3 justify-around">
      <SearchInput handleChange={handleChange} search={search} />
      {isLoading && <Loading />}
      {!isLoading && lists?.length === 0 && <Empty />}
      {/*render list if ok */}
      {lists?.map((list) => (
        <List list={list} key={list._id} update={false} />
      ))}
      <hr className="w-full" />

      <button
        className="p-2 text-xs text-gray-600 center text-center rounded-full bg-primary font-semibold border-2 shadow-md px-4"
        disable={isLoading}
      >
        refresh
      </button>
    </div>
  );
};

export default Search;
