import React from "react";
import data from "../utils/Planing.json";

function Dokumentasi() {
  return (
    <div className="lg:mt-20 lg:ml-32">
      <div className="grid grid-cols-3 lg:grid-cols-5 mx-1">
        {data.map((data) => (
          <div className="m-1" key={data.id}>
            <img
              src={data.src}
              alt=""
              className="object-cover h-24 w-96 lg:h-48"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dokumentasi;
