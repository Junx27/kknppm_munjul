import React, { useState } from "react";
import logo from "../assets/images/logo.png";
import {
  Bars2Icon,
  MagnifyingGlassIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  AcademicCapIcon,
  BanknotesIcon,
  ChatBubbleBottomCenterIcon,
  FolderPlusIcon,
  HomeIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";

function Footer() {
  const [open, setOpen] = useState(false);
  return (
    <div className="lg:flex lg:justify-between px-5 fixed top-0 left-0 right-0 pt-3 lg:pb-3 items-center bg-white">
      <div className="flex justify-between items-center lg:flex-none">
        <div>
          <img src={logo} alt="" className="w-10" />
        </div>
        <div>
          <h1 className="visible border-b-4 border-sky-500 pb-2 lg:invisible text-xs">
            KKN-PPM UNPERBA MUNJUL
          </h1>
        </div>
        <div className="lg:invisible" onClick={() => setOpen(!open)}>
          <Bars2Icon
            className={`w-5 lg:invisible text-sky-500 ${
              open ? "invisible" : "visible"
            }`}
          />
          <h1
            className={`w-5 -mt-5 lg:invisible text-red-500 ${
              open ? "visible" : "invisible"
            }`}
          >
            X
          </h1>
        </div>
      </div>
      <h1 className="font-bold text-lg -ml-64 invisible lg:visible">
        KKN-PPM Unperba Kelompok 2 Desa Munjul Tahun 2023
      </h1>
      <div className="invisible lg:visible">
        <input
          type="text"
          placeholder="Search"
          className="border border-yellow-500 rounded pl-2"
        />
        <button className="bg-yellow-500 px-2 border border-yellow-500 rounded text-white ml-5">
          Search
        </button>
      </div>
      <div className="-mt-10">
        <div
          className={`lg:invisible fixed top-0 left-0 right-0 lg:bg-transparent mb-32 bg-white z-[-1] smooth ${
            open ? "top-0" : "top-[-200px]"
          }`}
        >
          <div className="lg:mx-7 lg:mt-20 lg:w-5 lg:flex-col mx-5 pt-10 lg:pt-0 flex">
            <div className="text-center my-5 lg:my-10 mx-auto">
              <HomeIcon className="w-5 mx-auto lg:mx-0" />
              <a
                className="text-gray-300 text-xs hover:text-indigo-500"
                href="/"
              >
                Home
              </a>
            </div>
            <div className="text-center my-5 lg:my-10 mx-auto">
              <ChatBubbleBottomCenterIcon className="w-5 mx-auto  lg:mx-0" />
              <a
                className="text-gray-300 text-xs hover:text-indigo-500"
                href="/dokumentasi"
              >
                Planning
              </a>
            </div>
            <div className="text-center my-5 lg:my-10 mx-auto mx-auto">
              <AcademicCapIcon className="w-5 mx-auto lg:mx-0" />
              <a
                className="text-gray-300 text-xs hover:text-indigo-500"
                href="/member"
              >
                Member
              </a>
            </div>
            <div className="text-center my-5 lg:my-10 mx-auto">
              <FolderPlusIcon className="w-5 mx-auto lg:mx-0" />
              <a
                className="text-gray-300 text-xs hover:text-indigo-500"
                href="/proker"
              >
                Proker
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
