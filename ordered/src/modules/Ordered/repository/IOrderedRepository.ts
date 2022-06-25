import { ICreateOrderedDTO } from "../dto/ICreateOrderedDTO";
import { IOrderedDTO } from "../dto/IOrderedDTO";

export interface IOrderedRepository {
  create(data: ICreateOrderedDTO): Promise<IOrderedDTO>;
}
