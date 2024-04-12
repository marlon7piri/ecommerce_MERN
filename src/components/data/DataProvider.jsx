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
  const [show, setShow] = useState(true);
  const [carrito, setCarrito] = useState([]);
  const [total, setTotal] = useState(0);
  const params = useParams();
  const navigate = useNavigate();

  const fetchStrapi = async () => {
    const res = await getProductRequest();
    setProductos(res.data);
  };

  useEffect(() => {
    fetchStrapi();
    /*  const items = JSON.parse(window.localStorage.getItem("cart"));

    setCarrito(items); */
  }, []);
  useEffect(() => {
    /*  fetchStrapi(); */
    window.localStorage.setItem("cart", JSON.stringify(carrito));
  }, [carrito]);

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
  };

  const deleteProductDb = (id) => {
    DeleteProduct(id);
    setProductos(productos.filter((producto) => producto.id != id));
  };

  const addCarrito = (e) => {
    console.log(carrito);
    console.log(e._id);

    const itemfound = carrito.find((item) => {
      console.log(item);
      return item._id === e._id;
    });
    console.log(itemfound);
    if (itemfound) {
      console.log("producto que se repite");
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
    console.log(id);
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
        fetchStrapi,
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
