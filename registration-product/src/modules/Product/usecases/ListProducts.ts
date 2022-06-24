import { IProductDTO } from "../dto/IProductDTO";
import { AppException } from "@errors/AppException";
import prisma from "@config/lib/prisma";
export class ListProducts {
  public async execute(): Promise<IProductDTO[]> {
    const products = await prisma.product.findMany();
    if (!products.length)
      throw new AppException("There are no registered products", 404);
    return products;
  }
}
