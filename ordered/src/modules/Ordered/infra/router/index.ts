import express from "express";
import { OrderedController } from "../controllers/OrderedController";
const orderedController = new OrderedController();
const routes = express.Router();

routes.post("/", orderedController.store);

export default routes;
