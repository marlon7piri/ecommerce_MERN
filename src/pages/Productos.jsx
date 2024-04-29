import React, { useContext, useEffect } from "react";

import { DataContext } from "../components/data/DataProvider";

import CardProductos from "../components/CardProductos";
import { Outlet } from "react-router-dom";
import { getProductRequest } from "../components/data/api";

export default function Productos() {
  const [productos, setProductos] = useState([]);

  const fetchStrapi = async () => {
    const res = await getProductRequest();
    setProductos(res.data);
  };

  useEffect(() => {
    fetchStrapi();
  }, []);

  return (
    <div className="w-full h-full grid grid-cols-4  lg:grid-cols-4   md:grid-cols-3  sm:grid-cols-1 p-20">
      {productos?.map((item) => {
        return <CardProductos item={item} key={item._id} />;
      })}
    </div>
  );
}
