import React, { useState } from "react";
import { useContext } from "react";
import { DataContext } from "../components/data/DataProvider";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { BsCheck2 } from "react-icons/bs";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";
import {ImSpinner9} from 'react-icons/im';
import {toast,Toaster} from 'react-hot-toast';

export default function Carrito() {
  const { carrito, deleted, total, productos } = useContext(DataContext);
  const stripePromise = loadStripe(
    "pk_test_51MgskaEDc10WMF5UGSO1Nae8obg5xyMEuiloOclVS83gwhAgAudXMAi1mtKsS4xbZOYHodSmlp3FAPRBcR97K8ch00AplOuL3g"
  );
const [isloading, setIsloading] = useState(false)


const notifi =()=>{
 toast.error("Producto eliminado")
}
  const handlerCheckout = async () => {
    try {
      const stripe = await stripePromise;
      setIsloading(true)
      const res = await axios.post("http://localhost:1337/api/orders", {
        carrito,
      });
     
      await stripe.redirectToCheckout({ sessionId: res.data.stripeSession.id });

    } catch (error) {
      console.log(error);
    }
    setIsloading(false)
  };

  const Total = total.toFixed(2);
  return (
    <div className="flex flex-col gap-10 justify-center items-center m-auto  py-24">
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
      {carrito.map((e) => {
        return (
          <div
            key={e.id}
            className=" w-[500px] bg-gray-300 h-[100px] flex items-center justify-center gap-10 p-4 rounded-lg"
          >
            <img
              src={ import.meta.env.VITE_API_STRAPI_URL_BASE +
                e.attributes.image.data.attributes.url}
              alt={e.attributes.title}
              className="w-[100px] h-[100px] object-cover block"
            />
            <p>{e.attributes.title}</p>
            <p>{e.attributes.quantity}X</p>
            <p className="font-black">${e.attributes.price}</p>
            <button
              onClick={() => {
                deleted(e.id);
                notifi()
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
      { !isloading ? "Checkout" : <ImSpinner9 className="animate-spin"/>}
      </button>
      <Toaster position="top-left"/>
    </div>
  );
}
