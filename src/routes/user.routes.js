import express from "express";
import { getAll, getById, create, update, remove } from "../controllers/users.controller.js";

const router = express.Router();

//? read all users
router.get("/", getAll);

// get /users/active
//! you have to define this route before the /users/:id route, otherwise it will be treated as a parameter and will not work
router.get("/active", (req, res) => {
    res.status(200).json({
        message: "Get all active users",
        data: [
            { id: 1, name: "User 1", email: "user1@example.com", active: true },
        ],
        status: "success",
    });
});

//? get one user by id
router.get("/:id", getById);

//? create a new user
router.post("/", create);

//? update a user
router.put("/:id", update);

//? delete a user
router.delete("/:id", remove);

export default router;