import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "./data/DataProvider";
import { Toaster, toast } from "react-hot-toast";

export default function CardProductos({ item }) {
  const { addCarrito } = useContext(DataContext);

  const notifi = () => {
    toast.success("Producto agregado");
  };

  const imagenUrl =
    import.meta.env.VITE_API_STRAPI_URL_BASE +
    item.attributes.image.data.attributes.url;

  return (
    <div className="mt-24">
      <div className="bg-gray-50  w-[250px] h-[250px] flex flex-col justify-center items-center rounded-md shadow-xl shadow-slate-700 overflow-hidden ">
        <div className=" w-[140px] h-[140px] flex justify-center items-center">
          <img
            src={imagenUrl}
            alt=""
            className="w-full h-full object-cover transition-transform duration-500 "
          />
        </div>
        <p>{item.attributes.title}</p>
        <p className="font-black">${item.attributes.price}</p>
        <div className="flex gap-2 p-2">
          <button
            className="bg-rose-500 w-max px-6 py-2 text-gray-50 uppercase font-medium rounded-md hover:bg-rose-700"
            onClick={() => {
              addCarrito(item);
              notifi();
            }}
          >
            Add
          </button>
          <Toaster position="top-[200px] left-[200px]"/>
          <Link to={`/details/${item.attributes.title}`}>
            <button className="bg-rose-500 w-max px-4 py-2 text-gray-50 uppercase font-medium rounded-md hover:bg-rose-700">
              Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
