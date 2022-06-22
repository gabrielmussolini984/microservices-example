import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateProduct } from "@modules/Product/usecases/CreateProduct";

export class ProductController {
  public async store(req: Request, res: Response): Promise<Response> {
    const createProduct = container.resolve(CreateProduct);
    const product = await createProduct.execute(req.body?.title);
    return res.status(201).json({ product });
  }
}
