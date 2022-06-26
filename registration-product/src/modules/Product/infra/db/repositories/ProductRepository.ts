import prisma from "@config/lib/prisma";
import { ICreateProductDTO } from "@modules/Product/dto/ICreateProductDTO";
import { IProductDTO } from "@modules/Product/dto/IProductDTO";
import {
  IFilters,
  IProductRepository,
} from "@modules/Product/repository/IProductRepository";

export class ProductRepository implements IProductRepository {
  update(
    id: number,
    data: ICreateProductDTO | { active: boolean }
  ): Promise<IProductDTO> {
    return prisma.product.update({
      data,
      where: {
        id,
      },
    });
  }
  public async create(data: ICreateProductDTO): Promise<IProductDTO> {
    return await prisma.product.create({
      data,
    });
  }
  public async findAll(filters: IFilters): Promise<IProductDTO[]> {
    let where = {};
    if (filters.ids) {
      Object.assign(where, {
        id: {
          in: filters.ids.map((id) => Number(id)),
        },
      });
    }
    console.log(where);
    return prisma.product.findMany({
      where,
    });
  }
  public async findOne(id: number): Promise<IProductDTO | null> {
    return prisma.product.findUnique({
      where: {
        id,
      },
    });
  }
}
