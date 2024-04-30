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
      <svg fill="#000000" viewBox="0 0 24 24" id="check-circle" data-name="Flat Line" xmlns="http://www.w3.org/2000/svg" class="icon flat-line"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><circle id="secondary" cx="12" cy="12" r="9" style="fill: #02f713; stroke-width: 2;"></circle><polyline id="primary" points="8 12 11 15 16 10" style="fill: none; stroke: #030303; stroke-linecap: round; stroke-linejoin: round; stroke-width: 2;"></polyline><circle id="primary-2" data-name="primary" cx="12" cy="12" r="9" style="fill: none; stroke: #030303; stroke-linecap: round; stroke-linejoin: round; stroke-width: 2;"></circle></g></svg>
     
      
    </div>
  );
}
