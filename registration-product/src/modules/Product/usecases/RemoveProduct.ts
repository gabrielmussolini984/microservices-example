import { AppException } from "@errors/AppException";
import prisma from "@config/lib/prisma";
import { inject, injectable } from "tsyringe";
import { IProductRepository } from "../repository/IProductRepository";
@injectable()
export class RemoveProduct {
  constructor(
    @inject("ProductRepository")
    private productRepository: IProductRepository
  ) {}
  public async execute(id: number): Promise<void> {
    const productExist = await this.productRepository.findOne(id);
    if (!productExist) throw new AppException("Product not found", 404);
    await this.productRepository.update(id, {
      active: false,
    });
    return;
  }
}
