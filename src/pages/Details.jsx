import React from "react";
import { useContext } from "react";
import { useParams } from "react-router-dom";

import { DataContext } from "../components/data/DataProvider";

export default function Details() {
  const { addCarrito,productos } = useContext(DataContext);


    let params = useParams();

   


  return (
    <div className="mt-20 ">
      <h1 className="mt-10 text-center text-6xl text-gray-900 font-bold">
       More Details
      </h1>
      {
      productos.map((e) => {
        let found = e.nombre == params.producto;

        if (found) {
          return (
            <div className="flex gap-10 justify-center items-center mt-10" key={e._id}>
              <img src={e.image.url} alt={e.nombre} className="w-[400px]" />

              <div className="flex flex-col w-[300px] gap-2">
                <h1 className="text-3xl text-gray-900 font-bold">{e.nombre}</h1>
                <p>
                 {e.descripcion}
                </p>
                <p className="text-gray-900 font-black">${e.precio}</p>
                <button
                  className="bg-rose-500 w-max px-6 py-2 text-gray-50 uppercase font-medium rounded-md hover:bg-rose-700"
                  onClick={() => addCarrito(e)}
                >
                  Add
                </button>
              </div>
            </div>
          );
        }
      })
    }

   
    </div>
  );
}
