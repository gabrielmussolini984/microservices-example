import express from "express";
import { ProductController } from "../controllers/ProductController";
const productController = new ProductController();
const routes = express.Router();

routes.post("/", productController.store);
routes.put("/:id", productController.update);
routes.delete("/:id", productController.remove);

export default routes;
