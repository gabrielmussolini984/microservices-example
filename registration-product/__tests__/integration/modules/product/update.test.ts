import { request } from "../../../config/supertest";
import prisma from "../../../../src/shared/config/lib/prisma";

describe("Product Update", () => {
  it("Should be update a product", async () => {
    const product = await prisma.product.create({
      data: {
        title: "Produto 1",
      },
    });

    const response = await request.put(`/product/${product.id}`).send({
      title: "Produto Alterado",
    });

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("product");
    expect(response.body.product).toHaveProperty("title", "Produto Alterado");
  });

  it("Should not be update product, because invalid title", async () => {
    const response = await request.put(`/product/${10}`).send({
      title: null,
    });

    expect(response.status).toBe(422);
  });

  it("Should not be update product, because invalid id", async () => {
    const response = await request.put(`/product/${999}`).send({
      title: "Teste",
    });

    expect(response.status).toBe(404);
  });
});
