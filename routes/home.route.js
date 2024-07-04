import express from "express";
import {
  getAllUrl,
  createUrl,
  deleteUrl,
  editForm,
  editUrl,
  redireccionamiento,
} from "../controllers/Urlcontroller.js";
import { validarUrl } from "../middlewares/validarUrl.js";

const router = express.Router();

router.get("/", getAllUrl);
router.post("/", validarUrl, createUrl);
router.get("/eliminar/:id", deleteUrl);
router.get("/editar/:id", editForm);
router.post("/editar/:id", validarUrl, editUrl);
router.get("/:shortURL", redireccionamiento);

export default router;