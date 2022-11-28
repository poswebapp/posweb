import React from "react";
import Navbar from "./navbar/Navbar";

const Layout = ({ element }) => {
  return (
    <div className="flex flex-row justify-center w-screen h-auto">
      <Navbar />
      <div className="w-full h-screen p-10 block overflow-x-scroll overflow-y-scroll">{element}</div>
    </div>
  );
};

export default Layout;
