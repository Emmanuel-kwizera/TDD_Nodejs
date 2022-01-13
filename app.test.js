import { expect } from '@jest/globals'
import { request } from 'http'
import supertest from 'supertest'
import { describe } from 'yargs'
import app from "./app"

describe("POST /users", () =>{
    describe("given username and password", () => {
        test('should respond with a 200 status code', () => {
            const response = await request(app).post("/users").send({
                username: "username",
                password: "password"       
            })
            expect(response.statusCode).toBe(200)
        })        
    })

    describe("when username and password is missing", () => {

    })
})