import React from "react";
import member from "../utils/member.json";

function Member() {
  return (
    <div className="lg:mt-20 lg:ml-32 mx-5 mt-20">
      <h1 className="font-bold lg:text-3xl text-xl bg-black text-white text-center rounded py-2">
        Data Anggota KKN-PPM Munjul
      </h1>
      <div className="lg:grid lg:grid-cols-4 lg:gap-2 mt-5">
        {member.map((member) => (
          <div
            key={member.id}
            className="p-2 hover:shadow hover:shadow-yellow-500 rounded-lg"
          >
            <img
              src={member.avatar}
              alt=""
              className="rounded rounded-full border mt-5 mx-auto"
              style={{ width: "150px" }}
            />
            <div className="text-center mt-5">
              <h1 className="font-bold">{member.nama}</h1>
              <div className="text-gray-400 text-sm">
                {member.nim}/{member.prodi}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div>
        <h1 className="font-bold lg:text-3xl text-xl bg-black text-white text-center mt-5 rounded py-2">
          Struktural Organisasi
        </h1>
      </div>
      <div className="text-center text-yellow-500 mt-5 mb-10 border border-yellow-500 rounded lg:mx-72 pb-5">
        <span className="border border-lg bg-yellow-500 text-white py-1 px-2 rounded">
          Ketua
        </span>
        <img
          src={member[4].avatar}
          alt=""
          className="w-20 lg:w-32 mx-auto mt-5 rounded-full"
        />
        <div className="font-bold text-black mx-auto mt-5">
          {member[4].nama}
        </div>
      </div>
      <div className="text-center text-yellow-500 mt-5 mb-10 border border-yellow-500 rounded lg:mx-72 pb-5">
        <span className="border border-lg bg-yellow-500 text-white py-1 px-2 rounded">
          Sekertaris
        </span>
        <div className="lg:grid lg:grid-cols-2">
          <div>
            <img
              src={member[10].avatar}
              alt=""
              className="w-20 lg:w-32 mx-auto mt-5 rounded-full"
            />
            <div className="font-bold text-black mx-auto mt-5">
              {member[10].nama}
            </div>
          </div>
          <div>
            <img
              src={member[0].avatar}
              alt=""
              className="w-20 lg:w-32 mx-auto mt-5 rounded-full"
            />
            <div className="font-bold text-black mx-auto mt-5">
              {member[0].nama}
            </div>
          </div>
        </div>
      </div>
      <div className="text-center text-yellow-500 mt-5 mb-10 border border-yellow-500 rounded lg:mx-72 pb-5">
        <span className="border border-lg bg-yellow-500 text-white py-1 px-2 rounded">
          Bendahara
        </span>
        <img
          src={member[8].avatar}
          alt=""
          className="w-20 lg:w-32 mx-auto mt-5 rounded-full"
        />
        <div className="font-bold text-black mx-auto mt-5">
          {member[8].nama}
        </div>
      </div>
      <div className="text-center text-yellow-500 mt-5 mb-10 border border-yellow-500 rounded lg:mx-72 pb-5">
        <div className="lg:grid lg:grid-cols-2">
          <div>
            <span className="border border-lg bg-yellow-500 text-white py-1 px-2 rounded">
              Divisi Kemasyarakatan
            </span>
            <img
              src={member[2].avatar}
              alt=""
              className="w-20 lg:w-32 mx-auto mt-5 rounded-full"
            />
            <div className="font-bold text-black mx-auto my-5">
              {member[2].nama}
            </div>
          </div>
          <div>
            <span className="border border-lg bg-yellow-500 text-white py-1 px-2 rounded">
              Divisi Pendidikan
            </span>
            <img
              src={member[5].avatar}
              alt=""
              className="w-20 lg:w-32 mx-auto mt-5 rounded-full"
            />
            <div className="font-bold text-black mx-auto mt-5">
              {member[5].nama}
            </div>
          </div>
        </div>
      </div>
      <div className="text-center text-yellow-500 mt-5 mb-10 border border-yellow-500 rounded lg:mx-72 pb-5">
        <span className="border border-lg bg-yellow-500 text-white py-1 px-2 rounded">
          Divisi Media
        </span>
        <div className="lg:grid lg:grid-cols-2">
          <div>
            <img
              src={member[1].avatar}
              alt=""
              className="w-20 lg:w-32 mx-auto mt-5 rounded-full"
            />
            <div className="font-bold text-black mx-auto mt-5">
              {member[1].nama}
            </div>
          </div>
          <div>
            <img
              src={member[6].avatar}
              alt=""
              className="w-20 lg:w-32 mx-auto mt-5 rounded-full"
            />
            <div className="font-bold text-black mx-auto mt-5">
              {member[6].nama}
            </div>
          </div>
        </div>
      </div>
      <div className="text-center text-yellow-500 mt-5 mb-10 border border-yellow-500 rounded lg:mx-72 pb-5">
        <span className="border border-lg bg-yellow-500 text-white py-1 px-2 rounded">
          Divisi Agama
        </span>
        <img
          src={member[3].avatar}
          alt=""
          className="w-20 lg:w-32 mx-auto mt-5 rounded-full"
        />
        <div className="font-bold text-black mx-auto mt-5">
          {member[3].nama}
        </div>
      </div>
      <div className="text-center text-yellow-500 mt-5 mb-10 border border-yellow-500 rounded lg:mx-72 pb-5">
        <div className="lg:grid lg:grid-cols-2">
          <div>
            <span className="border border-lg bg-yellow-500 text-white py-1 px-2 rounded">
              Divisi Ekonomi
            </span>
            <img
              src={member[9].avatar}
              alt=""
              className="w-20 lg:w-32 mx-auto mt-5 rounded-full"
            />
            <div className="font-bold text-black mx-auto my-5">
              {member[9].nama}
            </div>
          </div>
          <div>
            <span className="border border-lg bg-yellow-500 text-white py-1 px-2 rounded">
              Divisi Kesehatan
            </span>
            <img
              src={member[7].avatar}
              alt=""
              className="w-20 lg:w-32 mx-auto mt-5 rounded-full"
            />
            <div className="font-bold text-black mx-auto mt-5">
              {member[7].nama}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Member;
