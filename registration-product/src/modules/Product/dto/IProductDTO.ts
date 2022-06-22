import { Product } from "@prisma/client";

export interface IProductDTO extends Product {
  title: string;
}
