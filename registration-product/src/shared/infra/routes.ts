import express from "express";
import ProductRoutes from "@modules/Product/infra/router";
const routes = express.Router();
routes.use("/product", ProductRoutes);
export default routes;
