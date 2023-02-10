import React, { createContext, useEffect, useState } from "react";
import { producto } from "./data";
import { v4 as uuidv4 } from "uuid";

import { getProductRequest, DeleteProduct, editProduct, createProductRequest,getAproductRequest } from "./api";
import { useNavigate, useParams } from "react-router-dom";


export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [productos, setProductos] = useState([]);



  const [carrito, setCarrito] = useState([]);
  const [total, setTotal] = useState(0);
  const params = useParams();
  const navigate =useNavigate()


  const getProduct = async () => {
    const res = await getProductRequest();
    setProductos(res.data)
   
  };

  const createProduct = async (newproducto) => {
    try {
     
      const res =createProductRequest(newproducto);

       setProductos([...productos,res.data])
       navigate("/productos")
  
    } catch (error) {
      console.log(error);
    }
  }


  const editProduct =async (id)=>{
    const res =await  getAproductRequest(id);
console.log(res);
  }

  const deleteProductDb = (id) => {
    DeleteProduct(id);
    setProductos(productos.filter((producto)=>producto._id !=id))
  };

  useEffect(() => {
    getProduct();
  }, [productos]);

  const addCarrito = (e) => {
 

    setCarrito([
      ...carrito,
      {
        _id: uuidv4(),
        imagen: e.image.url,
        nombre: e.nombre,
        precio: e.precio,
      },
    ]);
  };

  const deleted = (id) => {
  
    const newChange = carrito.filter((e) => e._id != id);

    setCarrito(newChange);
  };

  useEffect(() => {
    const getTotal = () => {
      let res = carrito.reduce((prev, item) => {
        return prev + item.precio;
      }, 0.0);
      setTotal(res);
    };
    getTotal();
  }, [carrito]);

  return (
    <DataContext.Provider
      value={{
        productos,
        setProductos,
        addCarrito,
        carrito,
        setCarrito,
        uuidv4,
        deleted,
        total,
        getProduct,
        createProduct,
        deleteProductDb,editProduct
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
