import express from "express";
import { addProduct } from "../Contollers/product.js";

const router = express.Router();

router.post("/", addProduct);

export default router;