import request from 'supertest'
import makeApp from './app.js'
import { jest } from '@jest/globals'

const createUser = jest.fn()
const getUser = jest.fn()

const app = makeApp({
  createUser,
  getUser
})

describe("POST /users", () => {

  beforeEach(() => {
    createUser.mockReset()
    createUser.mockResolvedValue(0)
  })

  describe("given a username and password", () => {

    test("should respond with a 200 status code", async () => {
      const response = await request(app).post("/users").send({
        username: "username",
        password: "password"
      })
      expect(response.statusCode).toBe(200)
    })
    test("should specify json in the content type header", async () => {
      const response = await request(app).post("/users").send({
        username: "username",
        password: "password"
      })
      expect(response.headers['content-type']).toEqual(expect.stringContaining("json"))
    })
    test("response has userId", async () => {
      const response = await request(app).post("/users").send({
        username: "username",
        password: "password"
      })
      expect(response.body.userId).toBeDefined()
    })
  })

  describe("when the username and password is missing", () => {
    
  })

})