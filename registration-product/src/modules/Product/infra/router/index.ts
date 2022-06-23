import express from "express";
import { ProductController } from "../controllers/ProductController";
const productController = new ProductController();
const routes = express.Router();

routes.post("/", productController.store);

export default routes;
