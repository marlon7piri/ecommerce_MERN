import React, { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import CardAdidas from "./CardAdidas";
import CardNewBalance from "./CardNewBalance";
import CardNike from "./CardNike";
import CardPumas from "./CardPumas";
import { DataContext } from "./data/DataProvider";

export default function CardProducto() {
 
  const { nikes, adidas, pumas,newbalance } = useContext(DataContext);



  const params = useParams()
  console.log(params.marca);
  if (params.marca === "nike") {

    nikes.map(item=>{
      return <CardNike item={item} />;
    })
    
  } else if (params.marca === "adidas") {
    return <CardAdidas adidas={adidas} />;
  } else if (params.marca === "puma") {
    return <CardPumas pumas={pumas} />;
  }
  else if (params.marca === "new_balance") {
    return <CardNewBalance newbalance={newbalance} />
  }else{
    return;
  }
}
