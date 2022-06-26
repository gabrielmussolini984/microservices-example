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
  public async execute(): Promise<IProductDTO[]> {
    const products = await this.productRepository.findAll();
    if (!products.length)
      throw new AppException("There are no registered products", 404);
    return products;
  }
}
