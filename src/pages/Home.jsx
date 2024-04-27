import React from "react";

import Contacto from "../components/Contacto";
import Header from "../components/Header";
import About from "./About";
import Marcas from "../components/Marcas";
import MasVendidos from "../components/CardMotion";
import Footer from "../components/Footer";
import MasInfo from "../components/MasInfo";
import PublicidadUno from "../components/PublicidadUno";
import Wave, { WaveContacto } from "../components/Wave";

export default function Home() {

  
  return (
    <div className="">
      <Header />
      <Wave/>
      <About />
      <PublicidadUno/>
     {/*  <Wave/> */}
      <Marcas/>
      <MasVendidos />
      <MasInfo />
      <WaveContacto />
      <Contacto />
      <Footer />
    </div>
  );
}
