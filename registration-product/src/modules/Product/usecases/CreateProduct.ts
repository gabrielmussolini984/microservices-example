import { IProductDTO } from "../dto/IProductDTO";
import { AppException } from "@errors/AppException";
import prisma from "@config/lib/prisma";
export class CreateProduct {
  public async execute(title: string): Promise<IProductDTO> {
    if (!title) throw new AppException("Title can not be null", 422);
    const product = await prisma.product.create({
      data: {
        title,
      },
    });
    return product;
  }
}
