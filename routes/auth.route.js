import express from "express";
import { AuthController } from "../controllers/Authcontroller.js";
const router = express.Router();

router.get("/login", AuthController.loginForm);
router.get("/register", AuthController.registerForm);

export default router;
