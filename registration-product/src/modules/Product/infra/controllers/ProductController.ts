import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateProduct } from "@modules/Product/usecases/CreateProduct";
import { UpdateProduct } from "@modules/Product/usecases/UpdateProduct";

export class ProductController {
  public async store(req: Request, res: Response): Promise<Response> {
    const createProduct = container.resolve(CreateProduct);
    const product = await createProduct.execute(req.body?.title);
    return res.status(201).json({ product });
  }
  public async update(req: Request, res: Response): Promise<Response> {
    const updateProduct = container.resolve(UpdateProduct);
    const product = await updateProduct.execute(
      Number(req.params?.id),
      req.body?.title
    );
    return res.status(200).json({ product });
  }
}