import { Ordered, Prisma } from "@prisma/client";

export interface IOrderedDTO extends Ordered {
  products: any[];
}
