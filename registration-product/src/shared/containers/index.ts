import { container } from "tsyringe";
import { ProductRepository } from "@modules/Product/infra/db/repositories/ProductRepository";
import { IProductRepository } from "@modules/Product/repository/IProductRepository";

container.registerSingleton<IProductRepository>(
  "ProductRepository",
  ProductRepository
);
