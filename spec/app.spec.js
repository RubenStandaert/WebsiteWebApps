let Request = require('request');
require('dotenv').config({path: './app.env.spec'})

describe("server", () => {
    let server;
    let firstNotebookID;
    beforeAll(() => {
        server = require("../app");
    });
    afterAll(() => {
    });
    describe("POST /users/register", () => {
        let data = {};
        let username = "DummyPerson";
        let password = "DummyPassword";
        // add a new recipe to our database
        beforeAll((done) => {
            Request(
                { method: 'POST'
                , uri: 'http://localhost:3000/users/register'
                , json: true
                , body: {username: username, password: password}
                }, (error, response, body) => {
                    console.log(error);
                data.status = response.statusCode;
                data.body = body;
                done();
            });
        });
        it("status 200", () => {
            expect(data.status).toBe(200);
        });
        it("check body", () => {
            expect(data.body.username).toBe(username);
            expect(data.body.password).toBe(password);
            expect(data.body.notebookID.length).toBeDefined();
            expect(data.body._id).toBeDefined();
            firstNotebookID = data.body.notebookID;
        });
    });
})