import axios from "axios";

export const getProductRequest = async () => {
  return await axios.get("http://localhost:3000/products");
};

export const createProductRequest = async (newproducto) => {
  const form = new FormData();

  for (let key in newproducto) {
    form.append(key, newproducto[key]);
  }

  return await axios.post("http://localhost:3000/products", form, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

export const DeleteProduct = async (id) => {
  return await axios.delete(`http://localhost:3000/products/${id}`);
};

export const editProductRequest = async (id, found) => {
  return await axios.put("http://localhost:3000/products/", id, found);
};

export const getAproductRequest = async (id) => {
  return await axios.get(`http://localhost:3000/products/${id}`);
};

