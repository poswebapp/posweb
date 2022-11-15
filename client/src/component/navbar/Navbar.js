/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import { MdSpaceDashboard } from 'react-icons/md'   
import { BsFillGridFill,BsFillShieldLockFill} from 'react-icons/bs'
import { SiGriddotai, SiGridsome } from 'react-icons/si'
import { FaUserTag,FaUserCircle, FaUser } from 'react-icons/fa'
import { HiDocumentReport } from 'react-icons/hi'

import { useLocation } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="grid grid-cols-1 place-content-start gap-4 min-w-44 md:w-[18%] h-screen bg-zinc-800 p-5 fixed top-0 left-0 z-40 ">
   <h4 className="text-lg text-white text-xl font-bold mt-4 mb-3 ">Gasoline POS</h4>
    {/* content navbar */}
      <Content icon={<MdSpaceDashboard />} name={"Dashboard"} link={"/"} />
      <Content icon={<BsFillGridFill/>} name={"Goods"} link={"/goods"} />
      <span className="grid gap-4 ml-5">
        <Content icon={<SiGridsome/>} name={"Incoming"} link={"/outgoing"} />
        <Content icon={<SiGriddotai/>} name={"Outgoing"} link={"/incoming"} />
        <Content icon={<FaUserTag/>} name={"Suppliers"} link={"/supplier"} />
      </span>
      <Content icon={<HiDocumentReport />} name={"Report"} link={"/reports"} />
        <Content icon={<FaUser/>} name={"Manage User"} link={"/user"} />
        <Content icon={<FaUserCircle/>} name={"Profile"} link={"/profile"} />
        <Content icon={<BsFillShieldLockFill/>} name={"Password"} link={"/password"} />
    </div>
  );
};

export default Navbar;
// content for the navbar
// dito ilalagay link icon at name
export const Content = ({ link, icon, name }) => {
  const query = useLocation()
  const path = query.pathname === link
  console.log(path)
  return (
    <Link
      to={link}
      className={`flex truncate justify-start content-center gap-2 text-white text-sm duration-300 transition-all ease-linear ${path && "bg-amber-200 rounded-lg p-2 text-zinc-800"}`}
    >
    <span className="mt-[.2rem]">
      {icon}
    </span>
      <h4 className="drop-shadow-sm font-semibold capitalize">{name}</h4>
    </Link>
  );
};
