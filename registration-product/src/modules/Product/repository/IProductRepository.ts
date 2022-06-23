import { IProductDTO } from "../dto/IProductDTO";

export interface IProductRepository {
  create(data: IProductDTO): Promise<IProductDTO>;
  findAll(): Promise<IProductDTO[]>;
  findOne(id: number): Promise<IProductDTO | null>;
  remove(id: number): Promise<IProductDTO>;
}
