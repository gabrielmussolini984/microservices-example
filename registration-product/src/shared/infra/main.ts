import dotenv from "dotenv";
dotenv.config();
import express, { Application, NextFunction, Request, Response } from "express";
import "express-async-errors";
import "reflect-metadata";
import cors from "cors";
import Morgan from "../config/lib/morgan";
// import "./containers";
import routes from "./routes";
import { AppException } from "../errors/AppException";

export const get = () => {
  const app: Application = express();

  app.use(cors());
  app.use(Morgan);
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(routes);

  app.use((err: Error, req: Request, res: Response, _: NextFunction) => {
    if (err instanceof AppException) {
      return res.status(err.statusCode).json({ message: err.message });
    }
    console.error(err);
    return res.status(500).json();
  });

  return app;
};
