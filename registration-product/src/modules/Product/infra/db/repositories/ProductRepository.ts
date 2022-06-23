import prisma from "@config/lib/prisma";
import { IProductDTO } from "@modules/Product/dto/IProductDTO";
import { IProductRepository } from "@modules/Product/repository/IProductRepository";

export class ProductRepository implements IProductRepository {
  public async create(data: IProductDTO): Promise<IProductDTO> {
    return await prisma.product.create({
      data,
    });
  }
  public async findAll(): Promise<IProductDTO[]> {
    return prisma.product.findMany();
  }
  public async findOne(id: number): Promise<IProductDTO | null> {
    return prisma.product.findUnique({
      where: {
        id,
      },
    });
  }
  public async remove(id: number): Promise<IProductDTO> {
    return prisma.product.delete({
      where: {
        id,
      },
    });
  }
}
