import React, { useContext, useState } from "react";
import About from "../components/About";
import Beneficios from "../components/Beneficios";
import { DataContext } from "../components/data/DataProvider";
import Estadisticas from "../components/Estadisticas";
import Header from "../components/Header";
import HeaderCentro from "../components/HeaderCentro";
import MejoresIdeasParaTi from "../components/MejoresIdeasParaTi";
import MenuNav from "../components/MenuNav";
import { Outlet } from "react-router-dom";
import { Carrusel } from "../components/Carrusel";

export default function Home() {
  const {handlerLeft} = useContext(DataContext);
  return (
    <div >
      
      <HeaderCentro />
      <Estadisticas />
      <Beneficios />
      <About />
      <MejoresIdeasParaTi/>
      
    </div>
  );
}
