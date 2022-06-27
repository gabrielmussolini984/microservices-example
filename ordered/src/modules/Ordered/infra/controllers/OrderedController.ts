import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateOrdered } from "@modules/Ordered/usecases/CreateOrdered";

export class OrderedController {
  public async store(req: Request, res: Response): Promise<Response> {
    const createOrdered = container.resolve(CreateOrdered);
    const ordered = await createOrdered.execute(req.body?.products);
    return res.status(201).json({ ordered });
  }
}
