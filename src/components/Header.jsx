import React from "react";
import BotonComponente from "./BotonComponente";
import TitulosComponente from "./TitulosComponente";
import axios from "axios";
import {Link,Element} from 'react-scroll'

export default function Header() {
 
  return (
    <div id="headers">
      <div className="container_header relative  h-screen w-full items-center justify-center lg:bg-[https://res.cloudinary.com/dxi9fwjsu/image/upload/v1695163249/AltaGama/fondo_chef_desktop_ck0qde.png)] md:bg-[url(https://res.cloudinary.com/dxi9fwjsu/image/upload/v1695163249/AltaGama/fondo_chef_desktop_ck0qde.png)] sm:bg-[url(https://res.cloudinary.com/dxi9fwjsu/image/upload/v1695162351/AltaGama/fondo_chef_mobile_zapatos_varwp5.png)] bg-cover bg-center bg-no-repeat lg:grid lg:grid-cols-2  sm:grid-cols-1">
      
        <div className=" w-max flex  sm:pt-24 p-4 ">
         <div className=" lg:w-[500px] sm:w-[300px] p-8" data-aos="fade-right" data-aos-mirror="true"  data-aos-easing="ease-in-out"   data-aos-duration="1000">
         <h1 className="text-5xl font-black text-gray-900 mb-4">Creditshoes <br></br>Pty</h1>
          <h3 className="text-2xl font-bold">¿Estás buscando el calzado perfecto para tus actividades diarias o deportivas? En nuestra tienda de zapatillas encontrarás la mejor selección de marcas y modelos para satisfacer todas tus necesidades.</h3>
          <div className="m-auto p-3">
        <Link to="marcas" smooth={true} duration={500}  spy={true} className="px-6 py-2 rounded-sm bg-gray-900 text-gray-50 hover:cursor-pointer hover:bg-gray-700">
          ver marcas
        </Link>
      </div>
         </div>
        </div>

       
       
    
       
      </div>
      
    </div>
  );
}
