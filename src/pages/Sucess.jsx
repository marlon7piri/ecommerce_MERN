import React from "react";
import { useNavigate } from "react-router-dom";

export default function Sucess() {

  const navigate =useNavigate()
  return (
    <div className="py-24">
      <h1 className="text-center text-2xl text-gray-900">
        Su compra fue realizada con exito, recibira un email a su correo con la
        factura de pago
      </h1>
      <img src="public/gift_success.gif" alt="" className="w-[200px] h-[300px] object-cover m-auto"/>
      
    </div>
  );
}
