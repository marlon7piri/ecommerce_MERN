import axios from "axios";

const URL = `https://eccomerce-mern-backend.vercel.app/products`
const URL2 = `http://localhost:3000/products`


export const getProductRequest = async () => {
  return await axios.get(URL);
};

export const createProductRequest = async (newproducto) => {
console.log(newproducto)
  const form = new FormData();

  for (let key in newproducto) {
    form.append(key, newproducto[key]);
  }

  return await axios.post(URL, form, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

export const DeleteProduct = async (id) => {
  return await axios.delete(`${URL}/${id}`);
};

export const editProductRequest = async (id, found) => {
  return await axios.put(`${URL}`, id, found);
};

export const getAproductRequest = async (id) => {
  return await axios.get(`${URL}/${id}`);
};

