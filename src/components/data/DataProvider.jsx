import React, { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { nike ,adida,puma,new_balance} from "../data/data.js";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [show, setShow] = useState(false);
  const [nikes, setNikes] = useState(nike);
  const [adidas, setAdidas] = useState(adida)
  const [pumas, setPumas] = useState(puma)
const [newbalance, setNewbalance] = useState(new_balance)

  const [isloading, setIsloading] = useState(false)



  const spinner = () =>{

    setIsloading(true)
  }


  useEffect(() => {
    setNikes(nike);
    setAdidas(adida)
    setPumas(puma)
  }, []); 

  const navigate = useNavigate()

  const navegar=()=>{

    navigate(-1)
  }

  const cambia_barra_menu =()=>{
    const scroll = window.scrollY
if(scroll>=300){
  document.querySelector(".barra_menu").classList.toggle("barra_menu_active")

}
  }
  

  const handlerLeft = () => {
    document.querySelector(".menu").classList.toggle("show");
    setShow(!show);
  };
  const showLista = () => {
    document.querySelector(".menu_check").classList.toggle("show_menu_check");
  };

  return (
    <DataContext.Provider
      value={{
        show,
        handlerLeft,
        showLista,
        cambia_barra_menu,
        navegar,
        nikes,adidas,pumas,newbalance,isloading, setIsloading,spinner
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
