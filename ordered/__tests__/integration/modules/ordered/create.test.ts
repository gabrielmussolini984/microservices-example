import axios from "axios";
import { request } from "../../../config/supertest";
jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;
describe("Ordered Create", () => {
  it("Should be create a new ordered", async () => {
    const data = {
      products: [1, 5, 6],
    };

    mockedAxios.post.mockResolvedValueOnce({ valid: true });
    const response = await request.post("/ordered").send(data);
    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty("ordered");
  });

  it("Should not be create a new ordered, because products can not be null", async () => {
    const data = {
      products: [],
    };
    const response = await request.post("/ordered").send(data);

    expect(response.status).toBe(422);
  });

  it("Should not be create a new ordered, because invalid products", async () => {
    const data = {
      products: ["abc", "123"],
    };
    mockedAxios.post.mockResolvedValueOnce({ valid: false });
    const response = await request.post("/ordered").send(data);

    expect(response.status).toBe(404);
  });
});
