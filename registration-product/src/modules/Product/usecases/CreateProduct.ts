import { IProductDTO } from "../dto/IProductDTO";
import { AppException } from "@errors/AppException";
import prisma from "@config/lib/prisma";
import { inject, injectable } from "tsyringe";
import { IProductRepository } from "../repository/IProductRepository";
@injectable()
export class CreateProduct {
  constructor(
    @inject("ProductRepository")
    private productRepository: IProductRepository
  ) {}
  public async execute(title: string): Promise<IProductDTO> {
    if (!title) throw new AppException("Title can not be null", 422);
    const product = await this.productRepository.create({ title });
    return product;
  }
}
