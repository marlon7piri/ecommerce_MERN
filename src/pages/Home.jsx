import React from "react";
import About from "../components/About";
import Beneficios from "../components/Beneficios";
import Estadisticas from "../components/Estadisticas";
import Header from "../components/Header";
import HeaderCentro from "../components/HeaderCentro";
import MejoresIdeasParaTi from "../components/MejoresIdeasParaTi";
import MenuNav from "../components/MenuNav";

export default function Home() {
  return (
    <div>
     
      <HeaderCentro />
      <Estadisticas />
      <Beneficios />
      <About />
      <MejoresIdeasParaTi />
    </div>
  );
}
