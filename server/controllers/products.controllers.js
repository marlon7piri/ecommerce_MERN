import Products from "../models/Products.js";
/* import db from "../dbmysql.js" */
import { uploadImage, deleteImage } from "../libs/cloudinary.js";
import fs from "fs-extra";

export const getProducts = async (req, res) => {
  try {
    const products = await Products.find(req.body);
    return res.json(products);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const addProducts = async (req, res) => {
  try {
    const { nombre, precio, descripcion,cantidad } = req.body;
    let image;
    if (req.files.image) {
      const imagenupload = await uploadImage(req.files.image.tempFilePath);

      console.log(imagenupload)

      await fs.remove(req.files.image.tempFilePath);

      image = {
        url: imagenupload.secure_url,
        public_id: imagenupload.public_id,
      };
    }

    const newproducto = new Products({
      nombre,
      precio,
      descripcion,
      image,
      cantidad
    });

    console.log(newproducto)

    await newproducto.save();

    return res.json(newproducto);
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
};

export const deleteProducts = async (req, res) => {
  try {
    const { id } = req.params;
    const productsdeleted = await Products.findByIdAndDelete(id);
    if (!productsdeleted) {
      res.sendStatus(404);
    } else {
      if (productsdeleted.image.public_id) {
        await deleteImage(productsdeleted.image.public_id);
        return res.status(200).json(productsdeleted);
      }
    }
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
};

export const editProduct = async (req, res) => {
  const { id } = req.params;

  try {
    const foundProduct = await Products.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    console.log(foundProduct);
    res.sendStatus(204);
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
};

export const getProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const productFound = await Products.findById(id);

    return res.json(productFound);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// configuracion de pago con stripe
