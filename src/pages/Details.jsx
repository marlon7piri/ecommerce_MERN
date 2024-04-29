import React from "react";
import { useContext } from "react";
import { Toaster,toast } from "react-hot-toast";
import { Outlet, useParams } from "react-router-dom";

import { DataContext } from "../components/data/DataProvider";

export default function Details() {
  const { addCarrito,productos } = useContext(DataContext);

    let params = useParams();

 
    const notifi = () => {
      toast.success("Producto agregado");
    };

  return (
    <div className="py-20 ">
      <h1 className=" mt-10  text-6xl text-gray-900 font-bold text-center">
       More Details
      </h1>
      {
      productos?.map((item) => {
        let found = item.nombre === params.producto;

        if (found) {
          return (
            <div className="flex lg:flex justify-center items-center md:flex md:flex-col sm:flex sm:flex-col" key={item._id} >
           
                <div className=" w-[300px] h-[300px]  p-2 flex justify-center items-center object-cover ">
                  <img
                    src={
                      item.image.url }
                    alt=""
                    className="w-[200px] h-[200px] object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="flex flex-col gap-4 p-8">
                <p>{item.nombre}</p>
                <p className="font-black">${item.precio}</p>
                <p className="font-black max-w-[400px]">{item.descripcion}</p>
                <button
                    className="bg-rose-500 w-max px-6 py-2 text-gray-50 uppercase font-medium rounded-md hover:bg-rose-700"
                    onClick={() => {
                      addCarrito(item);
                      notifi();
                    }}
                  >
                    Add
                  </button>
                </div>
               
                 
                  <Toaster />
                 
                
               
              </div>
           
          );
        }
      })
    }

<Outlet/>
    </div>
  );
}
