import React from "react";
import Navbar from "./navbar/Navbar";

const Layout = ({ element }) => {
  return (
    <div className="grid grid-cols-6 gap-5 w-screen h-auto">
      <Navbar />
      <div className="grid-cols-5">{element}</div>
    </div>
  );
};

export default Layout;
