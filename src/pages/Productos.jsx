import React, { useContext, useEffect, useState } from "react";

import { DataContext } from "../components/data/DataProvider";
import { BsCheck2 } from "react-icons/bs";
import { Link } from "react-router-dom";
import CardProductos from "../components/CardProductos";
import axios from "axios";

export default function Productos() {
  const { productos,handlerLeft,getProductRequest } = useContext(DataContext);
console.log(productos);


  return (
    <div className="w-full h-full grid grid-cols-4  lg:grid-cols-4   md:grid-cols-3  sm:grid-cols-1 p-20">
      {
        productos?.map(item=>{
          return <CardProductos item={item} key={item.id}/>
        })
      }
     

     <div>
 


     </div>
    </div>
  );
}
