import { IProductDTO } from "../dto/IProductDTO";
import { AppException } from "@errors/AppException";
import prisma from "@config/lib/prisma";
import { inject, injectable } from "tsyringe";
import { IProductRepository } from "../repository/IProductRepository";
@injectable()
export class ListProducts {
  constructor(
    @inject("ProductRepository")
    private productRepository: IProductRepository
  ) {}
  public async execute(filters: any): Promise<IProductDTO[]> {
    console.log(filters);
    const ids = filters?.products?.split(",");
    const products = await this.productRepository.findAll({
      ids,
    });
    if (!products.length)
      throw new AppException("There are no registered products", 404);
    return products;
  }
}
