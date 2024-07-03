import express from "express";
import { getAllUrl, createUrl, deleteUrl } from "../controllers/Urlcontroller.js";
const router = express.Router();

router.get("/", getAllUrl);
router.post("/", createUrl);
router.get("/eliminar/:id", deleteUrl);

export default router;