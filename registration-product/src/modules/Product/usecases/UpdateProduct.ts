import { IProductDTO } from "../dto/IProductDTO";
import { AppException } from "@errors/AppException";
import prisma from "@config/lib/prisma";
import { inject, injectable } from "tsyringe";
import { IProductRepository } from "../repository/IProductRepository";
@injectable()
export class UpdateProduct {
  constructor(
    @inject("ProductRepository")
    private productRepository: IProductRepository
  ) {}
  public async execute(id: number, title: string): Promise<IProductDTO> {
    if (!id || !title) throw new AppException("Params required", 422);
    const productUpdated = await this.productRepository.update(id, { title });
    return productUpdated;
  }
}
