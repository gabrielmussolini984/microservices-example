import { request } from "../../../config/supertest";
import prisma from "../../../../src/shared/config/lib/prisma";

describe("Product Remove", () => {
  it("Should be remove a product", async () => {
    const product = await prisma.product.create({
      data: {
        title: "Produto 1",
      },
    });

    const response = await request.delete(`/product/${product.id}`);

    expect(response.status).toBe(204);
  });

  it("Should not be remove product, because invalid id", async () => {
    const response = await request.delete(`/product/${99}`);

    expect(response.status).toBe(404);
    expect(response.body.message).toBe("Product not found");
  });
});
