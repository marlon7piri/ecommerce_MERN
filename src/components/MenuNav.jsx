import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { BiSearch } from "react-icons/bi";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";
import { Link as Links, Element } from "react-scroll";

import { RxHamburgerMenu } from "react-icons/rx";
import { DataContext } from "./data/DataProvider";

export default function MenuNav() {
  const navigate = useNavigate();
  const { handlerLeft, show, showLista, cambia_barra_menu } =
    useContext(DataContext);
  const { pathname } = useLocation();
  const [scroll, setScroll] = useState(false)

  const BackToHome = () => {
    navigate("/");
  };


  const changebackroundMenu =()=>{
const value = document.documentElement.scrollTop
if(value > 0){
  setScroll(true)
}else{
  setScroll(false)
}
  }

  window.addEventListener("scroll",changebackroundMenu)



  
  
  return (
    <div className="w-full  relative">
      <div className={scroll ? "barra_activa":"menu_barra"}>
        <div onClick={BackToHome}>
          {pathname == "/" ? (
            <Links
              className="text-gray-900 font-black uppercase hover:cursor-pointer hover:underline"
              to="headers"
              spy="true"
              smooth="true"
              duration={500}
            >
          <img src="https://res.cloudinary.com/dxi9fwjsu/image/upload/v1683043237/logo_credit_shoes_agvtry.png" alt="logo_de_creditshoes" className="sm:w-[70px] md:w-[80px] lg:w-[80px] object-cover"/>
            </Links>
          ) : (
            <p
              onClick={() => navigate(-1)}
              className="px-6  hover:cursor-pointer rounded-md bg-gray-900 text-gray-50"
            >
              regresar
            </p>
          )}
        </div>

        {pathname == "/" ? (
          <div className="menu flex gap-4">
            <Links
              onClick={() => handlerLeft()}
              to="headers"
              smooth="true"
              duration={500}
              offset={-100}
              spy="true"
              className=" font-bold hover:cursor-pointer hover:underline"
            >
              Home
            </Links>

            <Links
              onClick={() => handlerLeft()}
              to="marcas"
              spy="true"
              offset={-100}
              smooth="true"
              duration={500}
              className="font-bold hover:cursor-pointer hover:underline"
            >
              Marcas
            </Links>

            <Links
              to="masvendidos"
              onClick={() => handlerLeft()}
              spy="true"
              offset={-100}
              smooth="true"
              duration={500}
              className=" font-bold hover:cursor-pointer hover:underline"
            >
              Mas Vendidos
            </Links>

            <Links
              to="informaciondepago"
              onClick={() => handlerLeft()}
              spy="true"
              smooth="true"
              offset={-100}
              duration={500}
              className=" font-bold hover:cursor-pointer hover:underline"
            >
              Información
            </Links>
            <Links
              to="contacto"
              onClick={() => handlerLeft()}
              spy="true"
              smooth="true"
              offset={-100}
              duration={500}
              className=" font-bold hover:cursor-pointer hover:underline"
            >
              Contacto
            </Links>
          </div>
        ) : (
          /* menu cuando existe parametro */

          <div className="menu flex gap-4">
            <Link
              onClick={() => handlerLeft()}
              to="/"
              smooth="true"
              duration={500}
              spy="true"
              className=" font-bold hover:cursor-pointer hover:underline"
            >
              Home
            </Link>

            <Link
              onClick={() => handlerLeft()}
              to="/"
              spy="true"
              smooth="true"
              duration={500}
              className=" font-bold hover:cursor-pointer hover:underline"
            >
              Marcas
            </Link>

            <Link
              to="/"
              onClick={() => handlerLeft()}
              spy="true"
              smooth="true"
              duration={500}
              className=" font-bold hover:cursor-pointer hover:underline"
            >
              Mas Vendidos
            </Link>

            <Link
              to="/"
              onClick={() => handlerLeft()}
              spy="true"
              smooth="true"
              duration={500}
              className=" font-bold hover:cursor-pointer hover:underline"
            >
              Información
            </Link>
            <Link
              to="/"
              onClick={() => handlerLeft()}
              spy="true"
              smooth="true"
              duration={500}
              className=" font-bold hover:cursor-pointer hover:underline"
            >
              Contacto
            </Link>
          </div>
        )}
        <div className="icono_hamburguesa">
          {!show ? (
            <RxHamburgerMenu
              className=" text-3xl text-gray-900"
              onClick={() => handlerLeft()}
            />
          ) : (
            <IoMdClose
              className=" text-3xl text-gray-50"
              onClick={() => handlerLeft()}
            />
          )}
        </div>
      </div>
    </div>
  );
}
