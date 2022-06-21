import { request } from "../../../config/supertest";
import prisma from "../../../../src/shared/config/lib/prisma";

describe("Product Create", () => {
  it("Should be create a new product", async () => {
    const data = {

    }

    prisma.product.create({data: {title: "Teste"}})
    const response = await request.post("/product").send(data)
    
    expect(response.status).toBe(201);
  });
});
