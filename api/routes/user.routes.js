import { Router } from "express";
const router = Router();
import { getAllUsers, createUser } from "../controllers/user.controller.js";
import { verifyToken } from "../middleware/auth.middleware.js";
import { getUserInfo, login } from "../controllers/auth.controller.js";

router.get("/", getAllUsers);
router.post("/", createUser);
router.post("/login", login);
router.get("/me", verifyToken, getUserInfo);

export default router;
