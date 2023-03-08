import React, { createContext, useEffect, useState } from "react";
import { producto } from "./data";
import { v4 as uuidv4 } from "uuid";

import {
  getProductRequest,
  DeleteProduct,
  editProduct,
  createProductRequest,
  getAproductRequest,
} from "./api";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [productos, setProductos] = useState([]);

  const [carrito, setCarrito] = useState([]);
  const [total, setTotal] = useState(0);
  const params = useParams();
  const navigate = useNavigate();

  const fetchStrapi = async () => {
    const res = await axios.get(
      import.meta.env.VITE_API_STRAPI_URL + "/products?populate=*",
      {
        headers: {
          Authorization: "Bearer" + import.meta.env.VITE_API_STRAPI_TOKENS,
        },
      }
    );

    setProductos(res.data.data);
  };
  useEffect(() => {
    fetchStrapi();
  }, []);

  const createProduct = async (newproducto) => {
    try {
      const res = createProductRequest(newproducto);

      setProductos([...productos, res.data]);
      navigate("/productos");
    } catch (error) {
      console.log(error);
    }
  };

  const editProduct = async (id) => {
    const res = await getAproductRequest(id);
    console.log(res);
  };

  const deleteProductDb = (id) => {
    DeleteProduct(id);
    setProductos(productos.filter((producto) => producto.id != id));
  };

  const addCarrito = (e) => {
    const {id}=e
    console.log(id);


    const itemfound = carrito.find((item) => item.id === id);
console.log(itemfound);
    if (itemfound) {
      setCarrito(
        carrito.map((item) => {
          if (item.id === e.id) {
            return {
              ...itemfound,
              quantity: itemfound.attributes.quantity ++,
              
            };
          } else return item;
        })
      );
    } else {
      setCarrito([...carrito, { ...e, quantity: 1 }]);
    }

  };

  const deleted = (id) => {
    const newChange = carrito.filter((e) => e.id != id);

    setCarrito(newChange);
  };

  useEffect(() => {
    const getTotal = () => {
      let res = carrito.reduce((prev, item) => {
        return prev + (item.attributes.price * item.attributes.quantity);
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
        fetchStrapi,
        createProduct,
        deleteProductDb,
        editProduct,
        fetchStrapi,
        setProductos,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
