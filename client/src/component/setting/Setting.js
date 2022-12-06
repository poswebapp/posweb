import React, { useEffect, useState } from "react";
import Layout from "../Layout";
import { FaUserShield } from "react-icons/fa";
import { MdPermContactCalendar, MdAttachEmail } from "react-icons/md";
import { BsFileEarmarkLockFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const Setting = () => {
  const navigate = useNavigate();
  const [user, setuser] = useState(JSON.parse(localStorage.getItem("profile")));
  
  useEffect(() => {
    setuser(JSON.parse(localStorage.getItem("profile")));
  },[]);
  
  return (
    <Layout
      element={
        <span className="flex justify-center content-center w-full h-screen">
          <span className="w-[40rem] h-auto flex flex-wrap gap-14 m-auto content-center justify-center ">
            <Content
              icon={<FaUserShield />}
              text={"username"}
              value={user?.username}
              color={"text-cyan-900"}
              onClick={null}
            />

            <Content
              icon={<MdAttachEmail />}
              text={"email"}
              value={user?.email}
              color={"text-amber-900"}
              onClick={() => navigate("/patchEmail")}
            />

            <Content
              icon={<MdPermContactCalendar />}
              text={"contact"}
              value={user?.contact}
              color={"text-fuchsia-900"}
              onClick={() => navigate("/patchContact")}
            />

            <Content
              icon={<BsFileEarmarkLockFill />}
              text={"password"}
              value={"********"}
              color={"text-lime-900"}
              onClick={() => navigate("/reset")}
            />
          </span>
        </span>
      }
    />
  );
};

export default Setting;

// eslint-disable-next-line no-unused-vars
const Content = ({ icon, text, value, color, onClick }) => {
  return (
    <span
      className="flex content-start flex-col bg-white rounded-2xl shad1 w-[16rem] h-[10rem] p-6 hover:skew-y-6 hover:skew-x-9 hover:shadow-xl transition-all duration-300 ease-linear"
      onClick={onClick}
    >
      <span className={`text-[2.8rem] ${color}`}>{icon}</span>
      <h4 className="font-[500] mr-2 text-zinc-700 text-[1.6rem] font-[800] lato">
        {text}
      </h4>
      <p className="mt-1 text-zinc-500 font-[400]">{value}</p>
    </span>
  );
};
