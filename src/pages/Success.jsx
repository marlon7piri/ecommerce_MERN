import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { DataContext } from "../components/data/DataProvider";

export default function Success() {

  const navigate =useNavigate()
  const { setCarrito } =
  useContext(DataContext);

  useEffect(()=>{
    setCarrito([])
  },[])
  return (
    <div className="py-24">
      <h1 className="text-center text-2xl text-gray-900">
        Su compra fue realizada con exito, recibira un email a su correo con la
        factura de pago
      </h1>
      
     
      
    </div>
  );
}
