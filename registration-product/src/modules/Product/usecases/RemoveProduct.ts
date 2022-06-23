import { AppException } from "@errors/AppException";
import prisma from "@config/lib/prisma";
export class RemoveProduct {
  public async execute(id: number): Promise<void> {
    const productExist = await prisma.product.findUnique({
      where: {
        id,
      },
    });
    if (!productExist) throw new AppException("Product not found", 404);
    await prisma.product.delete({
      where: {
        id,
      },
    });
    return;
  }
}
