import { IOrderedDTO } from "../dto/IOrderedDTO";
import { inject, injectable } from "tsyringe";
import { AppException } from "@errors/AppException";
import { IOrderedRepository } from "../repository/IOrderedRepository";
import {
  HttpMethods,
  IHttpProvider,
} from "@shared/providers/http/model/IHttpRequest";
import { EListServices } from "@shared/providers/http/implements/Instances";

@injectable()
export class CreateOrdered {
  constructor(
    @inject("OrderedRepository")
    private orderedRepository: IOrderedRepository,
    @inject("HttpProvider")
    private httpProvider: IHttpProvider
  ) {}
  public async execute(products: any[]): Promise<IOrderedDTO> {
    if (!products?.length) throw new AppException("Products is required", 422);
    const response = await this.httpProvider.request(
      HttpMethods.GET,
      EListServices.product,
      `/product?products=${products.join(",")}`
    );
    if (!response || response.products?.length !== products.length)
      throw new AppException("Any product invalid or notfound", 404);
    const ordered = await this.orderedRepository.create({
      products: products.map((product) => ({
        id: product,
        title: "teste",
      })),
    });
    return ordered;
  }
}
