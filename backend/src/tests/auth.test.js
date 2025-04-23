import request from "supertest";
import bcrypt from 'bcrypt';
import app from '../app.js'
import  User  from "../models/User.js";
import { sequelize } from "../../src/config/db.js";

describe("Auth Controller Tests", () => {
  let agent;

  beforeAll(async () => {
    await sequelize.sync({ force: true });
    agent = request.agent(app);
  }, 30000)

  beforeEach(async () => {
    await User.destroy({ where: {} });
  });

  afterAll(async () => {
    await sequelize.close();
  });

  // -------------------------------------------
  // TESTS PARA SIGNUP
  // -------------------------------------------
  describe("POST /api/auth/signup", () => {
    const validUser = {
      fullname: "John Doe",
      username: "johndoe",
      email: "john@example.com",
      password: "password123"
    };

    it("debería registrar un usuario exitosamente", async () => {
      const res = await agent
        .post("/api/auth/signup")
        .send(validUser);

      expect(res.statusCode).toBe(201);
      expect(res.body).toMatchObject({
        id: expect.any(Number),
        username: validUser.username,
        email: validUser.email
      });
      expect(res.headers["set-cookie"]).toBeDefined();
    });

    it("debería fallar si falta algún campo", async () => {
      const tests = [
        { ...validUser, fullname: undefined },
        { ...validUser, username: undefined },
        { ...validUser, email: undefined },
        { ...validUser, password: undefined }
      ];

      for (const body of tests) {
        const res = await agent.post("/api/auth/signup").send(body);
        expect(res.statusCode).toBe(400);
        expect(res.body).toHaveProperty("message");
      }
    });

    it("debería fallar con formato de email inválido", async () => {
      const res = await agent
        .post("/api/auth/signup")
        .send({ ...validUser, email: "invalid-email" });
      
      expect(res.statusCode).toBe(400);
      expect(res.body.message).toMatch(/email/i);
    });

  });

  // --------------------------------------------
  // TESTS PARA LOGIN
  // --------------------------------------------
  describe("POST /api/auth/login", () => {
    const existingUser = {
      username: "existinguser",
      password: "validPassword123"
    };

    beforeEach(async () => {
      await User.create({
        ...existingUser,
        fullname: "Existing User",
        email: "existing@example.com",
        password: await bcrypt.hash(existingUser.password, 10)
      });
    });

    it("debería hacer login exitosamente", async () => {
      const res = await agent
        .post("/api/auth/login")
        .send(existingUser);

      expect(res.statusCode).toBe(200);
      expect(res.headers["set-cookie"]).toBeDefined();
    });

    it("debería fallar con credenciales inválidas", async () => {
      const tests = [
        { username: "wronguser", password: existingUser.password },
        { username: existingUser.username, password: "wrongpassword" }
      ];

      for (const credentials of tests) {
        const res = await agent.post("/api/auth/login").send(credentials);
        expect(res.statusCode).toBe(400);
      }
    });
  });

  // --------------------------------------------
  // TESTS PARA LOGOUT
  // --------------------------------------------
  describe("POST /api/auth/logout", () => {
    it("debería limpiar la cookie JWT", async () => {
      const res = await agent.post("/api/auth/logout");
      
      expect(res.statusCode).toBe(200);
      expect(res.headers["set-cookie"][0]).toMatch(/jwt=;/);
    });
  });
});