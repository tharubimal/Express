import express from "express";
import { getAll, getById, create, update, remove } from "../controllers/products.controller.js";

const router = express.Router();

//? read all products
router.get("/", getAll);

//? read a single product
router.get("/:id", getById);

//? create a new product
router.post("/", create);

//? update a product
router.put("/:id", update);

//? delete a product
router.delete("/:id", remove);

export default router;