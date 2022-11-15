import React from "react";
import notfound from "./img/404.svg";
const Notfound = () => {
  return (
    <div className="grid max-w-sm m-auto">
      <img src={notfound} alt="404 page" className="w-64 mx-auto mt-24 mb-5 drop-shadow-md" />
      <p className="uppercase font-semibold text-lg text-center text-gray-500 mb-2 mt-5">
        pages not found
      </p>
      <p className="text-center text-sm text-gray-400">
        The page you are looking for might have been removed had it name changed
        or temporary unavailable.
      </p>
    </div>
  );
};

export default Notfound;
