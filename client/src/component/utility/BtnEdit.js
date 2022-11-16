
import React from "react";

const BtnEdit = ({ loading, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`p-2 text-xs text-zinc border border-zinc-500 rounded-md shadow-md text-white  ${
        loading && "animate-pulse"
      }`}
    >
      {loading ? "processing" : "Submit"}
    </button>
  );
};

export default BtnEdit;
