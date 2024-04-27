import React, { useEffect, useState } from "react";
import Poper from "./Poper";

export default function PublicidadUno() {



  return (
    <div className="w-full h-full bg-[#00a8ff] relative">
      <div className="grid lg:grid-cols-2 sm:grid-cols-1 w-full h-full items-center justify-center">

      
        <div className="w-full lg:h-[700px] sm:h-[400px] bg-[url(https://res.cloudinary.com/dxi9fwjsu/image/upload/v1679435184/chef_zapatos/nike15.jpg)] bg-center bg-no-repeat bg-cover "></div>
        <div
          className="flex flex-col ml-8 sm:mb-10"
          data-aos="fade-right"
          data-aos-easing="ease-in-out"
          data-aos-duration="1000"
        >
          <h2 className="lg:text-6xl sm:text-4xl font-bold text-gray-900 mb-8 sm:mt-24 sm:text-center">
            Deportivas
          </h2>
          <p className="lg:text-3xl sm:text-2xl p-4 text-gray-900">
            Ya sea que estés buscando zapatillas para correr, hacer senderismo,
            entrenar en el gimnasio o simplemente para el día a día, tenemos
            todo lo que necesitas. Y si eres un amante de las marcas, ¡estamos
            seguros de que te encantará nuestra amplia variedad de marcas
            populares!
          </p>
        </div>
      </div>
     
    </div>
  );
}
