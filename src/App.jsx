import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import "./App.css";

import Home from "./pages/Home.jsx";
import MenuNav from "./components/MenuNav";



import ScrollToTop from "./components/ScrollToTop";
import { DataProvider } from "./components/data/DataProvider";


import Nikes from "./pages/Nikes";
import Adidas from "./pages/Adidas";
import Pumas from "./pages/Pumas";
import NotFound from "./pages/NotFound";
import GamaAlta from "./pages/GamaAlta";
import NewBalance from "./pages/NewBalance";
import Tacos from "./pages/Tacos";

function App() {
  return (
    <div className="App">
      <DataProvider>
        <ScrollToTop />
        <MenuNav />
        <Routes>
          <Route exact path="/" element={<Home />} />

          <Route exact path="/nike" element={<Nikes />} />
          <Route exact path="/adidas" element={<Adidas />} />
          <Route exact path="/gama_alta" element={<GamaAlta />} />
          <Route exact path="/puma" element={<Pumas />} />
          <Route exact path="/new_balance" element={<NewBalance />} />
          <Route exact path="/tacos" element={<Tacos />} />
          <Route exact path="/*" element={<NotFound />} />
         
        </Routes>
      </DataProvider>
    </div>
  );
}

export default App;
