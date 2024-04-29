import React from "react";
import CardBenefLeft from "./CardMejoresILeft";
import CardMejoresRight from "./CardMejoresRight";
import { FaHandsWash } from "react-icons/fa";
import CardMejoresILeft from "./CardMejoresILeft";
import { Carrusel } from "./Carrusel";

export default function MejoresIdeasParaTi() {
  return (
    <div className="w-full h-full sm:mt-24 ">
      <h2 className="text-center text-4xl text-gray-700">Best deals for you</h2>
      <div className="w-full">
        <div className="flex flex-col items-center justify-center sm:flex sm:gap-4 sm:mb-4 p-4">
          <FaHandsWash className="text-3xl text-gray-900" />
          <p className="text-4xl text-gray-900">hands wash only</p>
        </div>
        <div className="w-full">
          
         <Carrusel/>
        </div>
      </div>
    </div>
  );
}
