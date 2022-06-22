import { IProductDTO } from "../dto/IProductDTO";
import { AppException } from "@errors/AppException";

export class CreateProduct {
  public async execute(title: string): Promise<IProductDTO> {
    if (!title) throw new AppException("Title can not be null", 422);
    return { title, id: 1, createdAt: new Date(), updatedAt: new Date() };
  }
}
