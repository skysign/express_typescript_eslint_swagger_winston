import dotenv from "dotenv";
dotenv.config();

import app from "../src/app"
import request from "supertest";

it("/welcome", async () => {
  const res = await request(app).get('/welcome')
  expect(res.statusCode).toBe(200);
  expect(res.text).toBe('welcome!');
  console.log(res.text);
});