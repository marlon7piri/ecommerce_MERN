import React from "react";
import TitulosComponente from "../components/TitulosComponente";

export default function About() {
  return (
    <div className="my-24">
      <div
        className=" flex flex-col justify-center items-center py-24"
        data-aos="fade-up"
        data-aos-easing="ease-in-out"
        data-aos-duration="1000"
      >
        <TitulosComponente
          titulo="Sobre Nosotros"
          estilos="font-bold lg:text-6xl sm:text-4xl text-center text-gray-900 w-max mb-10"
        />

        <p className="  text-gray-900 p-4 w-[90%] text-2xl">
          Tenemos zapatillas deportivas de diferentes tipos de marcas.Además, nuestra
          tienda ofrece precios competitivos para que
          puedas obtener los mejores productos a precios asequibles. ¡No esperes
          más para visitarnos y descubrir lo que tenemos para ofrecerte en
          nuestra tienda de zapatillas!
        </p>
      </div>
    </div>
  );
}
