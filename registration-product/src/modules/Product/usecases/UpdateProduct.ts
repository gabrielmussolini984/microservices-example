import { IProductDTO } from "../dto/IProductDTO";
import { AppException } from "@errors/AppException";
import prisma from "@config/lib/prisma";
export class UpdateProduct {
  public async execute(id: number, title: string): Promise<IProductDTO> {
    if (!id || !title) throw new AppException("Params required", 422);
    const productUpdated = await prisma.product.update({
      where: {
        id,
      },
      data: {
        title,
      },
    });
    return productUpdated;
  }
}
