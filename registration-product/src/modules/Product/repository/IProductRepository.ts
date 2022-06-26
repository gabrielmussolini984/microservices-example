import { ICreateProductDTO } from "../dto/ICreateProductDTO";
import { IProductDTO } from "../dto/IProductDTO";

export interface IFilters {
  ids?: number[];
}
export interface IProductRepository {
  create(data: ICreateProductDTO): Promise<IProductDTO>;
  findAll(filters: IFilters): Promise<IProductDTO[]>;
  findOne(id: number): Promise<IProductDTO | null>;
  update(
    id: number,
    data: ICreateProductDTO | { active: boolean }
  ): Promise<IProductDTO>;
}
