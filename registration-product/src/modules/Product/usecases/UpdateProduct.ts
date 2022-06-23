import { IProductDTO } from "../dto/IProductDTO";
import { AppException } from "@errors/AppException";

export class UpdateProduct {
  public async execute(id: number, title: string): Promise<IProductDTO> {
    if (!id || !title) throw new AppException("Params required", 422);
    return { title: "Produto Alterado", id, createdAt: new Date(), updatedAt: new Date() };
  }
}
