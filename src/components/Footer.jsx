import React, { useState } from "react";
import logo from "../assets/images/logo.png";
import {
  Bars2Icon,
  CalendarIcon,
  CameraIcon,
  FolderIcon,
  MagnifyingGlassIcon,
  PhotoIcon,
  UserIcon,
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
import { Link } from "react-router-dom";

function Footer() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="invisible lg:visible lg:flex lg:justify-between px-5 fixed top-0 left-0 right-0 pt-3 lg:pb-3 items-center bg-white">
        <div className="flex justify-between items-center lg:flex-none">
          <div>
            <img src={logo} alt="" className="w-10" />
          </div>
        </div>
        <h1 className="font-bold text-lg -ml-64 invisible lg:visible">
          KKN-PPM Unperba Kelompok 2 Desa Munjul Tahun 2023
        </h1>
        <div className="invisible lg:visible">
          <input
            type="text"
            placeholder="Search"
            className="border border-black rounded pl-2"
          />
          <button className="bg-black text-white px-2 border border-black rounded text-white ml-5">
            Search
          </button>
        </div>
      </div>
      <div className="visible lg:invisible grid grid-cols-4 gap-2 px-5 fixed bottom-0 left-0 right-0 lg:pb-3 items-center bg-white text-gray-500 w-auto">
        <div className="w-8 py-2 mx-auto">
          <a href="/">
            <PhotoIcon />
            <span className="text-xs">Galeri</span>
          </a>
        </div>
        <div className="w-8 py-2 mx-auto">
          <FolderIcon />
          <span className="text-xs">Album</span>
        </div>
        <div className="w-8 py-2 mx-auto">
          <a href="/proker">
            <ChatBubbleBottomCenterIcon />
            <span className="text-xs">Detail</span>
          </a>
        </div>
        <div className="w-8 py-2 mx-auto">
          <a href="/member">
            <UserIcon />
            <span className="text-xs">Member</span>
          </a>
        </div>
      </div>
    </>
  );
}

export default Footer;
