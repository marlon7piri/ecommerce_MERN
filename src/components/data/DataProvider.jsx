import React, { createContext, useEffect, useState } from "react";
import { producto } from "./data";
import { v4 as uuidv4 } from "uuid";

import {
  getProductRequest,
  DeleteProduct,
  createProductRequest,
  getAproductRequest,
} from "./api";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [productos, setProductos] = useState([]);
  const [show, setShow] = useState(true);
  const [carrito, setCarrito] = useState(() => {
    try {
      const items = localStorage.getItem("cart");

      return items ? JSON.parse(items) : [];
    } catch (error) {
      return [];
    }
  });
  const [total, setTotal] = useState(0);
  const params = useParams();
  const navigate = useNavigate();

  const fetchStrapi = async () => {
    const res = await getProductRequest();

    setProductos(res.data);
  };

  useEffect(() => {
    fetchStrapi();
  }, []);
  useEffect(() => {
    fetchStrapi();
    const items = localStorage.setItem("cart", JSON.stringify(carrito));

    
  }, [carrito]);

  const createProduct = async (newproducto) => {
    try {
      const res = await createProductRequest(newproducto);
     
      setProductos([...productos, res.data]);
      navigate("/productos");
    } catch (error) {
      console.log(error);
    }
  };

  const editProduct = async (id) => {
    const res = await getAproductRequest(id);
  };

  const deleteProductDb = async (id) => {
    const res = await DeleteProduct(id);

    setProductos(productos.filter((producto) => producto._id != res.data._id));
  };

  const addCarrito = (e) => {
   

    const itemfound = carrito.find((item) => {
     
      return item._id === e._id;
    });
    
    if (itemfound) {
      
      setCarrito(
        carrito.map((item) => {
          if (item._id === e._id) {
            return {
              ...itemfound,
              cantidad: itemfound.cantidad + 1,
            };
          } else return item;
        })
      );
    } else {
      setCarrito([...carrito, e]);
    }
  };

  const reducirCantidad = (id) => {
    const productFound = carrito.find((item) => item._id === id);

    if (productFound) {
      setCarrito(
        carrito.map((element) => {
          if (element._id === productFound._id && productFound.cantidad > 1) {
            return { ...element, cantidad: productFound.cantidad - 1 };
          }
          return element;
        })
      );
    } else {
      return carrito;
    }
  };

  const aumentarCantidad = (id) => {
    setCarrito((item) => {
      return item.map((element) => {
        if (element._id === id) {
          return { ...element, cantidad: element.cantidad + 1 };
        }
        return element;
      });
    });
  };

  const deleted = (id) => {
   
    setCarrito(carrito.filter((e) => e._id != id));
  };

  useEffect(() => {
    const getTotal = () => {
      let res = carrito?.reduce((prev, item) => {
        return prev + item.precio * item.cantidad;
      }, 0.0);
      setTotal(res);
    };
    getTotal();
  }, [carrito]);

  const handlerLeft = () => {
    document.querySelector(".menu").classList.toggle("show");
    setShow(!show);
  };

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

        createProduct,
        deleteProductDb,
        editProduct,
        fetchStrapi,
        reducirCantidad,
        aumentarCantidad,
        handlerLeft,
        show,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
