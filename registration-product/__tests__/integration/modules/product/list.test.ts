import { request } from "../../../config/supertest";
import { IProductDTO } from "../../../../src/modules/Product/dto/IProductDTO";

describe("Product List", () => {
  it("Should be list all products", async () => {
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
    expect(response.body.products).toEqual(expect.arrayContaining([,]));
  });
});
