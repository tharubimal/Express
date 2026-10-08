import express from "express";
import { getAll, getById, create, update, remove } from "../controllers/users.controller.js";

const router = express.Router();

//? read all users
router.get("/", getAll);

//? get one user by id
router.get("/:id", getById);

//? create a new user
router.post("/", create);

//? update a user
router.put("/:id", update);

//? delete a user
router.delete("/:id", remove);

export default router;