import React, { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";

import { DataContext } from "../components/data/DataProvider";

export default function Team() {
  const { getProduct, productos, deleteProductDb, editProductDb } =
    useContext(DataContext);

  useEffect(() => {
    getProduct();
  }, [productos]);

  return (
    <div className="mt-10 min-h-screen  py-28 px-10">
      

      <div className="flex justify-evenly p-2">
      
        <h2 className="text-center text-4xl font-black text-gray-900 ">
          Productos
        </h2>
        <Link
          to="/new"
          className="bg-gray-300 w-max block p-2 h-max rounded-md hover:bg-rose-500 transition-colors duration-500 hover:text-white"
        >
          Crear Nuevo Producto
        </Link>
      </div>

      <div className="flex flex-wrap gap-20 p-10">
        {productos.map((e) => {
          return (
            <div key={e._id}>
              <div className="bg-gray-50  w-[250px] h-[320px] flex   flex-wrap justify-center items-center rounded-md shadow-2xl overflow-hidden p-2">
                <div className=" w-[150px] h-[150px] flex justify-center items-center">
                  <img
                    src={e.image.url}
                    alt={e.nombre}
                    className="w-full h-full object-cover transition-transform duration-500 "
                  />
                </div>
                <div className="flex flex-col w-full items-center justify-center">
                  <p>{e.nombre}</p>

                  <p className="font-black">${e.precio}</p>
                </div>

                <div className="flex gap-2">
                  <button
                    className="bg-rose-500 w-max px-6 py-2 text-gray-50 uppercase font-medium rounded-md hover:bg-rose-700"
                    onClick={() => {
                      deleteProductDb(e._id);
                    }}
                  >
                    Delete
                  </button>
                  <Link to={`/new/${e._id}`} className="bg-rose-500 w-max px-6 py-2 text-gray-50 uppercase font-medium rounded-md hover:bg-rose-700">
                    Edit
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
