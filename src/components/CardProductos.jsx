import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "./data/DataProvider";

export default function CardProductos() {
  const { productos, addCarrito } = useContext(DataContext);
  return (
    <div className="grid grid-cols-4 gap-10 mt-48 justify-center items-center p-4">
      {productos.map((e) => {
        return (
          <div key={e._id}>
            <div className="bg-gray-50  w-[250px] h-[250px] flex flex-col  flex-wrap justify-center items-center rounded-md shadow-xl shadow-slate-700 overflow-hidden ">
              <div className=" w-[140px] h-[140px] flex justify-center items-center">
                <img
                  src={e.image.url}
                  alt=""
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105 hover:cursor-pointer"
                />
              </div>
              <p>{e.nombre}</p>
              <p className="font-black">${e.precio}</p>
              <div className="flex gap-2 p-2">
                <button
                  className="bg-rose-500 w-max px-6 py-2 text-gray-50 uppercase font-medium rounded-md hover:bg-rose-700"
                  onClick={() => {
                    addCarrito(e);
                    setTimeout(() => {
                      document
                        .querySelector(".mensaje")
                        .classList.toggle("show");
                    }, 0);

                    setTimeout(() => {
                      document
                        .querySelector(".mensaje")
                        .classList.remove("show");
                    }, 700);
                  }}
                >
                  Add
                </button>
                <Link to={`/details/${e.nombre}`}>
                  <button className="bg-rose-500 w-max px-4 py-2 text-gray-50 uppercase font-medium rounded-md hover:bg-rose-700">
                    Details
                  </button>
                </Link>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
