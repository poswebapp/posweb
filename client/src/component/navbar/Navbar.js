import { RiLogoutBoxRFill } from "react-icons/ri";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { MdSpaceDashboard } from "react-icons/md";
import { BsFillGridFill, BsFillShieldLockFill } from "react-icons/bs";
import { SiGriddotai, SiGridsome } from "react-icons/si";
import { FaUserTag, FaUserCircle, FaUser } from "react-icons/fa";
import { HiDocumentReport } from "react-icons/hi";

import { useLocation } from "react-router-dom";
import { userStore } from "../../zustand/user";

const Navbar = () => {
  const curUsr = userStore((state) => state.curUsr);
  const setCurUsr = userStore(state=> state.setCurUsr)
  

  useEffect(() => {
 const admin =localStorage.getItem("admin")  
 const profile =localStorage.getItem("profile")  
    console.log("cursr",curUsr)
    if (admin) {
      setCurUsr("admin")
    }
    if (profile) {
      setCurUsr("profile")
    }
  }, [ curUsr, setCurUsr]);
  return (
    <div className="grid grid-cols-1 place-content-start gap-4 w-[18%] min-w-40 max-w-52 h-screen bg-zinc-800 p-5 ml-0 mr-auto">
      <h4 className="text-lg text-white text-xl font-bold mt-4 mb-3 ">
        Gasoline POS
      </h4>
      {/* content navbar */}
      <Content icon={<MdSpaceDashboard />} name={"Dashboard"} link={"/"} />
      <Content icon={<BsFillGridFill />} name={"Goods"} link={"/good"} />
      <span className="grid gap-4 ml-5">
        <Content icon={<SiGridsome />} name={"Incoming"} link={"/incoming"} />
        <Content icon={<SiGriddotai />} name={"Outgoing"} link={"/outgoing"} />
        <Content icon={<FaUserTag />} name={"Suppliers"} link={"/supplier"} />
      </span>
      <Content icon={<HiDocumentReport />} name={"Report"} link={"/reports"} />
      <Content icon={<FaUserCircle />} name={"Profile"} link={"/profile"} />
      <Content
        icon={<BsFillShieldLockFill />}
        name={"Password"}
        link={"/password"}
      />
      {curUsr && (
        <Content icon={<RiLogoutBoxRFill />} name={"Logout"} link={"/logout"} />
      )}
    </div>
  );
};

export default Navbar;
// content for the navbar
// dito ilalagay link icon at name
export const Content = ({ link, icon, name }) => {
  const query = useLocation();
  const path = query.pathname === link;
  return (
    <Link
      to={link}
      className={`flex truncate justify-start content-center gap-2 text-white text-sm duration-300 transition-all ease-linear hover:bg-amber-200 hover:text-zinc-800 hover:p-2 hover:rounded-lg ${
        path && "bg-amber-200 rounded-lg p-2 text-zinc-800"
      }`}
    >
      <span className="mt-[.2rem]">{icon}</span>
      <h4 className="drop-shadow-sm font-semibold capitalize">{name}</h4>
    </Link>
  );
};
