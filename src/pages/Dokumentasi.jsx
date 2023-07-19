import React from "react";
import Planning from "../utils/Planing.json";
import {
  AcademicCapIcon,
  BanknotesIcon,
  ChatBubbleBottomCenterIcon,
  FolderPlusIcon,
  HomeIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";

function Dokumentasi() {
  return (
    <div>
      <div className="lg:grid lg:grid-cols-3 lg:gap-5 lg:ml-32 lg:mr-5 lg:mb-5 lg:mt-20 mx-5 mt-20">
        {Planning.map((data) => (
          <div key={data.id}>
            <img
              src={data.src}
              alt=""
              className="rounded-lg hover:rounded-none object-cover lg:h-48 lg:w-96"
            />
            <h1 className="font-bold text-sm mt-5 h-10 line-clamp-2">
              {data.nama}
            </h1>
            <div className="flex justify-between">
              <div className="text-sm text-sm text-gray-400 mt-10 ml-2">
                {data.waktu}
                <span className="ml-2 bg-black font-bold px-3 text-white rounded-r-lg">
                  {data.id}
                </span>
              </div>
              <div className="inline-flex items-center mt-10 lg:pb-5 pb-10 ml-12">
                <ChatBubbleBottomCenterIcon className="w-5 mr-2" />
                <div className="text-sm text-xs text-gray-400">
                  {data.kategori}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dokumentasi;
