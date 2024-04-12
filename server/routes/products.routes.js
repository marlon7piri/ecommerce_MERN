import { Router } from "express";
import {
  getProduct,
  getProducts,
  deleteProducts,
  editProduct,
  addProducts
} from "../controllers/products.controllers.js";
import { getStripe } from "../controllers/checkout.js";

const router = Router();

router.get("/products", getProducts);
router.post("/products", addProducts);
router.delete("/products/:id", deleteProducts);
router.put("/products/:id", editProduct);
router.get("/products/:id", getProduct);
router.post('/orders',getStripe) 


export default router;
