import request from "supertest";
import { server, start } from "../server";

describe("API Tests", () => {
  beforeAll(async () => {
    await start();
  });

  afterAll(async () => {
    await server.close();
  });

  test('GET / retorna 200 e { hello: "world" }', async () => {
    const res = await request(server.server).get("/");
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ hello: "world" });
  });

  test("GET /phrase retorna uma frase válida", async () => {
    const res = await request(server.server).get("/phrase");
    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty("id");
    expect(res.body).toHaveProperty("phrase");
  });
});
