import React from "react";
import { Link } from "react-router-dom";
import { bestdeals1 } from "./data/data";

export default function CardMejoresILeft() {
  return (
    <div>
      {bestdeals1.map((e) => {
        return (
          <div className="flex flex-col gap-4" key={e.id}>
            <img src={e.image} alt="cartera" className="w-[200px] object-cover block"/>
            <p className="text-2xl text-gray-900">{e.nombre}</p>
            <p className="w-[300px] text-gray-900">{e.description}</p>
            <Link to={`/details/${e.nombre}`}  className='bg-rose-500 w-max px-6 py-2 text-gray-50 uppercase font-medium hover:bg-rose-700'>View Details</Link>
          </div>
        );
      })}
    </div>
  );
}
