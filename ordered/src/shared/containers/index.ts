import { container } from "tsyringe";
import { OrderedRepository } from "@modules/Ordered/infra/db/repositories/OrderedRepository";
import { IOrderedRepository } from "@modules/Ordered/repository/IOrderedRepository";
import "../providers/http";

container.registerSingleton<IOrderedRepository>(
  "OrderedRepository",
  OrderedRepository
);
