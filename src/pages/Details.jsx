import React from "react";
import { useContext } from "react";
import { Toaster,toast } from "react-hot-toast";
import { useParams } from "react-router-dom";

import { DataContext } from "../components/data/DataProvider";

export default function Details() {
  const { addCarrito,productos } = useContext(DataContext);


    let params = useParams();

 
    const notifi = () => {
      toast.success("Producto agregado");
    };
console.log(params.producto);
console.log(productos);
  return (
    <div className="mt-20 ">
      <h1 className=" mt-10  text-6xl text-gray-900 font-bold text-center">
       More Details
      </h1>
      {
      productos.map((item) => {
        let found = item.attributes.title === params.producto;
console.log(found);
        if (found) {
          return (
            <div className="flex lg:flex justify-center items-center md:flex md:flex-col sm:flex sm:flex-col" key={item.id} >
           
                <div className=" w-[300px] h-[300px]  p-2 flex justify-center items-center object-cover ">
                  <img
                    src={import.meta.env.VITE_API_STRAPI_URL_BASE +
                      item.attributes.image.data.attributes.url }
                    alt=""
                    className="w-[200px] h-[200px] object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="flex flex-col gap-4">
                <p>{item.attributes.title}</p>
                <p className="font-black">${item.attributes.price}</p>
                <p className="font-black">{item.attributes.description}</p>
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

   
    </div>
  );
}
