import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import {
  AcademicCapIcon,
  BanknotesIcon,
  ChatBubbleBottomCenterIcon,
  FolderPlusIcon,
  HomeIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";

function Header() {
  return (
    <div className="invisible lg:visible fixed top-0 left-0 right-0 bg-white lg:bg-transparent mb-32">
      <div className="lg:mx-7 lg:mt-20 lg:w-5 lg:flex-col mx-5 pt-10 lg:pt-0 flex">
        <div className="text-center my-5 lg:my-10 mx-auto">
          <HomeIcon className="w-5 mx-auto lg:mx-0" />
          <a className="text-gray-300 text-xs hover:text-indigo-500" href="/">
            Home
          </a>
        </div>
        <div className="text-center my-5 lg:my-10 mx-auto">
          <ChatBubbleBottomCenterIcon className="w-5 mx-auto  lg:mx-0" />
          <a
            className="text-gray-300 text-xs hover:text-indigo-500"
            href="/dokumentasi"
          >
            Dokumentasi
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
  );
}

export default Header;
