import React from "react";
import Layout from "../Layout";
import { FaUserShield } from "react-icons/fa";
import { MdPermContactCalendar, MdAttachEmail } from "react-icons/md";
import { BsFileEarmarkLockFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const Setting = () => {
  const navigate = useNavigate();
  return (
    <Layout
      element={
        <span className="flex justify-center content-center w-full h-screen">
          <span className="w-[40rem] h-auto flex flex-wrap gap-14 content-start justify-center ">
            <Content
              icon={<FaUserShield />}
              text={"username"}
              value={"Admin"}
              color={"text-cyan-900"}
              onClick={null}
            />

            <Content
              icon={<MdAttachEmail />}
              text={"email"}
              value={"xample@email.com"}
              color={"text-amber-900"}
              onClick={null}
            />

            <Content
              icon={<MdPermContactCalendar />}
              text={"contact"}
              value={"09866312345"}
              color={"text-rose-900"}
              onClick={null}
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
      className="flex content-start flex-col bg-white rounded-2xl shad4 w-[16rem] h-[10rem] p-6 "
      onClick={onClick}
    >
      <span className={`text-[3rem] ${color}`}>{icon}</span>
      <h4 className="font-[500] mr-2 text-zinc-700 text-[1.8rem] font-[800] lato">
        {text}
      </h4>
      <p className="mt-1 text-zinc-500 font-[400]">{value}</p>
    </span>
  );
};
