import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { DataContext } from "./data/DataProvider";

export default function CardMejoresILeft() {
  const { productos } = useContext(DataContext);

  const found = productos.filter((item) => item.nombre == "carteraroja");

  console.log(found);

  return (
    <div>
      {found.map((e) => {
        return (
          <div
            className="lg:flex flex-col justify-centers items-center lg:gap-4  p-2 w-full sm:text-center sm:pb-8"
            key={e._id}
          >
            <img
              src={e.image.url}
              alt="cartera rosa"
              className="w-[200px] object-cover block sm:m-auto"
            />
            <p className="text-2xl text-gray-900">{e.nombre}</p>
            <p className="w-full text-gray-900 sm:p-4">{e.descripcion}</p>
            <Link
              to={`/details/${e.nombre}`}
              className="bg-rose-500 w-max px-6 py-2 text-gray-50 uppercase font-medium hover:bg-rose-700"
            >
              View Details
            </Link>
          </div>
        );
      })}
    </div>
  );
}
