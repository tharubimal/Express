import express from "express";
import { getAllProducts, getProductById, createProduct, updateProduct, removeProduct } from "../controllers/products.controller.js";

const router = express.Router();

//? read all products
router.get("/", getAllProducts);

//? read a single product
router.get("/:id", getProductById);

//? create a new product
router.post("/", createProduct);

//? update a product
router.put("/:id", updateProduct);

//? delete a product
router.delete("/:id", removeProduct);

export default router;