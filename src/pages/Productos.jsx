import React, { useContext} from "react";

import { DataContext } from "../components/data/DataProvider";

import CardProductos from "../components/CardProductos";


export default function Productos() {
  const { productos, handlerLeft, getProductRequest } = useContext(DataContext);

  return (
    <div className="w-full h-full grid grid-cols-4  lg:grid-cols-4   md:grid-cols-3  sm:grid-cols-1 p-20">
      {productos?.map((item) => {
        return <CardProductos item={item}  key={item._id}/>;
      })}

      <div></div>
    </div>
  );
}
