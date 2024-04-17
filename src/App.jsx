import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Carrito from "./pages/Carrito";
import Createproduct from "./pages/Createproduct";
import Details from "./pages/Details";
import Productos from "./pages/Productos";
import Team from "./pages/Team";
import "./App.css";
import { DataProvider } from "./components/data/DataProvider";
import Home from "./pages/Home";
import MenuNav from "./components/MenuNav";
import Sucess from "./pages/Sucess";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};
function App() {
 

  return (
    <div className="App">
      <DataProvider>
        <ScrollToTop/>
        <MenuNav />
        
        <Routes>
          <Route exact path="/productos" element={<Productos />} />
          <Route path="/new/" element={<Createproduct />} />
          <Route path="/new/:id" element={<Createproduct />} />
          <Route path="/team" element={<Team />} />
          <Route exact path="/carrito" element={<Carrito />} />
         
          <Route exact path="/success" element={<Sucess />} />

          <Route exact path="/details/:producto" element={<Details />} />
          <Route exact path="/" element={<Home />} />
        </Routes>
      </DataProvider>
    </div>
  );
}

export default App;
