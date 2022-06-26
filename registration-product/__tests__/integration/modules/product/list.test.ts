import { request } from "../../../config/supertest";
import { IProductDTO } from "../../../../src/modules/Product/dto/IProductDTO";
import prisma from "../../../../src/shared/config/lib/prisma";

const createProducts = async () => {
  const product1 = await prisma.product.create({
    data: {
      title: "Produto 1",
    },
  });

  const product2 = await prisma.product.create({
    data: {
      title: "Produto 2",
    },
  });

  const product3 = await prisma.product.create({
    data: {
      title: "Produto 2",
    },
  });

  return [product1.id, product2.id, product3.id];
};
describe("Product List", () => {
  it("Should be list all products", async () => {
    await createProducts();
    const response = await request.get("/product");

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("products");
    const products: IProductDTO[] = response.body.products;
    products.forEach((product) => {
      expect(product.id).toEqual(expect.any(Number));
      expect(product.title).toEqual(expect.any(String));
      expect(new Date(product.createdAt)).toEqual(expect.any(Date));
      expect(new Date(product.updatedAt)).toEqual(expect.any(Date));
    });
  });

  it("Should be list all products filtering ids", async () => {
    const ids = await createProducts();
    ids.pop();
    const response = await request.get(`/product?products=${ids}`);
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("products");
    const products: IProductDTO[] = response.body.products;
    products.forEach((product) => {
      expect(product.id).toEqual(expect.any(Number));
      expect(product.title).toEqual(expect.any(String));
      expect(new Date(product.createdAt)).toEqual(expect.any(Date));
      expect(new Date(product.updatedAt)).toEqual(expect.any(Date));
    });
    expect(response.body?.products?.length).toBe(ids?.length);
  });
});
