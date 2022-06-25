import express from "express";
import OrderedRoutes from "@modules/Ordered/infra/router";
const routes = express.Router();
routes.use("/ordered", OrderedRoutes);
export default routes;
