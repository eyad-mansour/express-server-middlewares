"use strict";

const server = require("../server");

const supertest = require("supertest");

const request = supertest(server.app);

describe("test for API server", () => {
  it("testing home page", async () => {
    const response = await request.get("/");
    expect(response.text).toEqual("hi it is me eyad");
  });
});

describe("test for API server", () => {
  it("testing home page", async () => {
    const response = await request.get("/square");
    expect(response.text).toEqual("The number is: 625");
  });
});
