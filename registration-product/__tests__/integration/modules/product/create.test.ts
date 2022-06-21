import { request } from "../../../config/supertest";
import prisma from "../../../../src/shared/config/lib/prisma";

describe("Product Create", () => {
  it("Should be create a new product", async () => {
    const data = {
      title: "Produto 1",
    };
    const response = await request.post("/product").send(data);

    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty("product");
    expect(response.body.product).toHaveProperty("title", "Produto 1");
  });

  it("Should not be create a new product, because title can not be null", async () => {
    const data = {
      title: "",
    };
    const response = await request.post("/product").send(data);

    expect(response.status).toBe(422);
  });
});
