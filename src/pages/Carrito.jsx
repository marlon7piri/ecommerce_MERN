import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { DataContext } from "../components/data/DataProvider";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { BsCheck2 } from "react-icons/bs";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";
import { ImSpinner9 } from "react-icons/im";
import { toast, Toaster } from "react-hot-toast";

const object = {
  title: "cartera morada",
  image:
    "https://res.cloudinary.com/dxi9fwjsu/image/upload/v1672815503/dia-y-noche_xeyjp8.png",
  price: 64.99,
  quantity: 1,
};

export default function Carrito() {
  const { carrito, deleted, total, aumentarCantidad, reducirCantidad } =
    useContext(DataContext);

  const [isloading, setIsloading] = useState(false);

  const notifi = () => {
    toast.error("Producto eliminado");
  };
  const handlerCheckout = async () => {
    try {
      setIsloading(true);
      const res = await axios.post("https://eccomerce-mern-backend.vercel.app/orders", carrito);
      

      window.location = res.data.url;
    } catch (error) {
      console.log(error);
    }
    setIsloading(false);
  };

  const Total = total?.toFixed(2);
  return (
    <div className="flex flex-col gap-10 justify-center items-center w-full min-h-screen p-24">
      <h1 className="text-center text-6xl font-black text-gray-900">
        Tu Carrito
      </h1>
      <div>
        {carrito == 0 ? (
          <h1 className="text-3xl font-black text-gray-900">
            No hay productos en su carrito
          </h1>
        ) : (
          ""
        )}
      </div>
      {carrito?.map((e) => {
        return (
          <div
            key={e._id}
            className="w-full min-w-[90%] bg-gray-100 h-[200px] flex items-center gap-4   rounded-lg overflow-hidden p-2"
          >
            <img
              src={e.image?.url}
              alt={e.nombre}
              className="w-[100px] h-[100px] object-cover block"
            />
            <p>{e.nombre}</p>

            <p className="font-black">${e.precio}</p>
            <div className="flex flex-col gap-2 items-center justify-center">
              <button
                className="w-max h-max bg-sky-200 p-4 rounded-md hover:bg-sky-400 transition duration-300"
                onClick={() => reducirCantidad(e._id)}
              >
                -
              </button>
              <p className="font-black">{e.cantidad}</p>
              <button
                className="w-max h-max bg-sky-200 p-4 rounded-md hover:bg-sky-400 transition duration-300"
                onClick={() => aumentarCantidad(e._id)}
              >
                +
              </button>
            </div>
            <button
              onClick={() => {
                deleted(e._id);
                notifi();
              }}
              className="bg-red-600 text-gray-50 rounded-md font-bold p-4 hover:bg-red-400"
            >
              <RiDeleteBin5Fill />
            </button>
          </div>
        );
      })}

      <div>
        <h2 className="text-3xl text-gray-900 font-black">
          Total:<span className="ml-2">${Total}</span>
        </h2>
      </div>
      <button
        onClick={handlerCheckout}
        className="w-[100px] flex justify-center items-center bg-red-600 text-gray-50 rounded-md font-bold p-4 hover:bg-red-400 mt-4 "
      >
        {!isloading ? "Checkout" : <ImSpinner9 className="animate-spin" />}
      </button>
      <Toaster position="top-left" />
    </div>
  );
}
