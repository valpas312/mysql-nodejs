import { Router } from "express";
import { getUsers, createUser, getUserById, deleteUserById, updateUserById, login, register} from "../controllers/users.controllers.js";

const router = Router();

router.get("/users", getUsers);
router.get("/user/:id", getUserById)
router.post("/user", createUser);
router.post("/login", login);
router.post("/register", register);
router.put("/user/:id", updateUserById);
router.delete("/user/:id", deleteUserById);

export default router;