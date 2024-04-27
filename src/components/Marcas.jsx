import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import {motion} from 'framer-motion'



import TitulosComponente from "./TitulosComponente";

export default function Marcas() {

  const navigate = useNavigate();
  const verProductos = () => {
    navigate("/productos");
  };

 

  return (
    <div className="w-full h-full p-3 mt-24" id="marcas">
      <TitulosComponente
        titulo="Marcas"
        estilos="lg:text-6xl sm:text-4xl text-center text-center font-bold text-gray-900"
      funcion={verProductos}/>

    <div className="container_marcas grid grid-cols-3  items-center  gap-2 p-3"> 
<Link to={"/nike"}

  className="relative block overflow-hidden rounded-xl bg-[url(https://res.cloudinary.com/dxi9fwjsu/image/upload/v1695160865/chef_zapatos/foto_portada_nike_vx0kzi.jpg)] bg-cover bg-center bg-no-repeat h-[400px] w-[300px] mt-16  shadow-2xl shadow-black hover:shadow-slate-50" data-aos="fade-up"  data-aos-delay="50"
  data-aos-duration="700"
>
  <div className="absolute inset-0 bg-black/25"></div>

  <div className="relative flex items-start justify-between p-4 sm:p-6 lg:p-8">
    <div className="sm:pt-18 pt-12 text-white lg:pt-24">
      <h3 className="text-xl font-bold sm:text-2xl">Nike</h3>

     
    </div>

    <span
      className="inline-flex items-center gap-0.5 rounded-full bg-black px-2 py-1 text-xs font-semibold text-white"
    >
      4.5

      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-4 w-4 text-yellow-300"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
        />
      </svg>
    </span>
  </div>
  </Link>
      <Link to={`/adidas`}

 className="relative block overflow-hidden rounded-xl bg-[url(https://res.cloudinary.com/dxi9fwjsu/image/upload/v1695160865/chef_zapatos/foto_portadas_adidas_h8pet1.jpg)] bg-cover bg-center bg-no-repeat h-[400px] w-[300px]  mt-16 shadow-2xl shadow-black hover:shadow-slate-50" data-aos="fade-up"  data-aos-delay="50"
 data-aos-duration="1000"
>
  <div className="absolute inset-0 bg-black/25"></div>

  <div className="relative flex items-start justify-between p-4 sm:p-6 lg:p-8">
    <div className="sm:pt-18 pt-12 text-white lg:pt-24">
      <h3 className="text-xl font-bold sm:text-2xl">Adidas</h3>

     
    </div>

    <span
      className="inline-flex items-center gap-0.5 rounded-full bg-black px-2 py-1 text-xs font-semibold text-white"
    >
      4.5

      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-4 w-4 text-yellow-300"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
        />
      </svg>
    </span>
  </div>
</Link>
<Link to={`/puma`}

 className="relative block overflow-hidden rounded-xl bg-[url(https://res.cloudinary.com/dxi9fwjsu/image/upload/v1679954246/chef_zapatos/Pumas/puma3.jpg)] bg-cover bg-center bg-no-repeat h-[400px] w-[300px] mt-16 shadow-2xl shadow-black hover:shadow-slate-50" data-aos="fade-up"  data-aos-delay="50"
 data-aos-duration="1300"
>
  <div className="absolute inset-0 bg-black/25"></div>

  <div className="relative flex items-start justify-between p-4 sm:p-6 lg:p-8">
    <div className="sm:pt-18 pt-12 text-white lg:pt-24">
      <h3 className="text-xl font-bold sm:text-2xl">Puma</h3>

     
    </div>

    <span
      className="inline-flex items-center gap-0.5 rounded-full bg-black px-2 py-1 text-xs font-semibold text-white"
    >
      4.5

      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-4 w-4 text-yellow-300"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
        />
      </svg>
    </span>
  </div>
</Link>
<Link to={`/gama_alta`}

  className="relative block overflow-hidden rounded-xl bg-[url(https://res.cloudinary.com/dxi9fwjsu/image/upload/v1695160865/chef_zapatos/foto_portada_gama_alta_koo6js.jpg)] bg-cover bg-center bg-no-repeat h-[400px] w-[300px] mt-16 shadow-2xl shadow-black hover:shadow-slate-50" data-aos="fade-up"  data-aos-delay="50"
  data-aos-duration="1600"
>
  <div className="absolute inset-0 bg-black/25"></div>

  <div className="relative flex items-start justify-between p-4 sm:p-6 lg:p-8">
    <div className="sm:pt-18 pt-12 text-white lg:pt-24">
      <h3 className="text-xl font-bold sm:text-2xl">Alta Gama</h3>

     
    </div>

    <span
      className="inline-flex items-center gap-0.5 rounded-full bg-black px-2 py-1 text-xs font-semibold text-white"
    >
      4.5

      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-4 w-4 text-yellow-300"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
        />
      </svg>
    </span>
  </div>
</Link>
<Link to={`/new_balance`}

  className="relative block overflow-hidden rounded-xl bg-[url(https://res.cloudinary.com/dxi9fwjsu/image/upload/v1695160866/chef_zapatos/foto_portadas_otras_marcas_i9vnu4.jpg)] bg-cover bg-center bg-no-repeat h-[400px] w-[300px] mt-16 shadow-2xl shadow-black hover:shadow-slate-50" data-aos="fade-up"  data-aos-delay="50"
  data-aos-duration="1600"
>
  <div className="absolute inset-0 bg-black/25"></div>

  <div className="relative flex items-start justify-between p-4 sm:p-6 lg:p-8">
    <div className="sm:pt-18 pt-12 text-white lg:pt-24">
      <h3 className="text-xl font-bold sm:text-2xl">Otras Marcas</h3>

     
    </div>

    <span
      className="inline-flex items-center gap-0.5 rounded-full bg-black px-2 py-1 text-xs font-semibold text-white"
    >
      4.5

      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-4 w-4 text-yellow-300"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
        />
      </svg>
    </span>
  </div>
</Link>
<Link to={`/tacos`}

  className="relative block overflow-hidden rounded-xl bg-[url(https://res.cloudinary.com/dxi9fwjsu/image/upload/v1682517044/chef_zapatos/Tacos/t-4.jpg)] bg-cover bg-center bg-no-repeat h-[400px] w-[300px] mt-16 shadow-2xl shadow-black hover:shadow-slate-50" data-aos="fade-up"  data-aos-delay="50"
  data-aos-duration="1600"
>
  <div className="absolute inset-0 bg-black/25"></div>

  <div className="relative flex items-start justify-between p-4 sm:p-6 lg:p-8">
    <div className="sm:pt-18 pt-12 text-white lg:pt-24">
      <h3 className="text-xl font-bold sm:text-2xl">Tacos y Taquillos</h3>

     
    </div>

    <span
      className="inline-flex items-center gap-0.5 rounded-full bg-black px-2 py-1 text-xs font-semibold text-white"
    >
      4.5

      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-4 w-4 text-yellow-300"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
        />
      </svg>
    </span>
  </div>
</Link>
</div>  
    </div>
  );
}
