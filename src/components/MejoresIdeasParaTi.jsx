import React from "react";
import CardBenefLeft from "./CardMejoresILeft";
import CardMejoresRight from "./CardMejoresRight";
import { FaHandsWash } from "react-icons/fa";

export default function MejoresIdeasParaTi() {
  return (
    <div className="w-full h-full p-20">
      <h2 className="text-center text-4xl text-gray-700">Best deals for you</h2>
      <div className="flex justify-center gap-4">
        <div>
          <CardBenefLeft />
        </div>
        <div className="flex flex-col items-center justify-center">
          <FaHandsWash className="text-3xl text-gray-900"/>
          <p className="text-1xl text-gray-900">hands wash only</p>
        </div>
        <div className="ml-20">
          <CardMejoresRight />
        </div>
      </div>
    </div>
  );
}
