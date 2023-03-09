import { Router } from "express";
import {
  getProduct,
  getProducts,
  deleteProducts,
  editProduct,
  addProducts,getStripe
} from "../controllers/products.controllers.js";

const router = Router();

router.get("/products", getProducts);
router.post("/products", addProducts);
router.delete("/products/:id", deleteProducts);
router.put("/products/:id", editProduct);
router.get("/products/:id", getProduct);
router.post('/payment',getStripe) 


export default router;
