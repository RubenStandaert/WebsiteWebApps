let Request = require('request');

describe("server", () => {
    let server;
    let firstNotebookID;
    let firstNoteID;
    beforeAll(() => {
        server = require("../app");
    });
    afterAll(() => {
    });
    // Register a user. A new notebook should be created.
    describe("POST /register", () => {
        let data = {};
        let username = "DummyPerson";
        let password = "DummyPassword";
        beforeAll((done) => {
            Request(
                { method: 'POST'
                , uri: 'http://localhost:3000/register'
                , json: true
                , body: {
                    username: username,
                    password: password}
                }, (error, response, body) => {
                    console.log(body);
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
            expect(data.body.notebookID).toBeDefined();
            expect(data.body._id).toBeDefined();
            firstNotebookID = data.body.notebookID;
        });
    });
    // Add a note to the new notebook.
    describe(`POST API/notebook/${firstNotebookID}/notes/add`, () => {
        let data = {};
        let name = "Armbar";
        let description = "Try to grab the arm behind the tricep with one arm, and on the forearm with the other arm ...";
        let position = "Bottom guard";
        let techniqueType = "Submission";
        let counter = 6;
        let image = "http://keithmackay.com/images/picture.jpg";
        let date = new Date();
        beforeAll((done) => {
            Request(
                { method: 'POST'
                , uri: `http://localhost:3000/API/notebook/${firstNotebookID}/notes/add`
                , json: true
                , body: {
                    name: name,
                    description: description,
                    position: position,
                    techniqueType: techniqueType,
                    counter: counter,
                    image: image,
                    date: date
                }
                }, (error, response, body) => {
                data.status = response.statusCode;
                data.body = body;
                done();
            }).auth(null, null, true, process.env.TEST_VALID_TOKEN);
        });
        it("status 200", () => {
            expect(data.status).toBe(200);
        });
        it("check body", () => {
            expect(data.body.notes[0].name).toBe(name);
            expect(data.body.notes[0].description).toBe(description);
            expect(data.body.notes[0].position).toBe(position);
            expect(data.body.notes[0].techniqueType).toBe(techniqueType);
            expect(data.body.notes[0].counter).toBe(counter);
            expect(data.body.notes[0].image).toBe(image);
            expect(data.body.notes[0].date).toBe(date);
            expect(data.body.notes[0]._id).toBeDefined();
            firstNoteID = data.body.notes[0]._id;

        });
    });
    // Delete a note from the new notebook.
    describe(`POST API/notebook/${firstNotebookID}/notes/delete/${firstNoteID}`, () => {
        let data = {};
        beforeAll((done) => {
            Request(
                { method: 'POST'
                , uri: `http://localhost:3000/API/notebook/${firstNotebookID}/notes/delete/${firstNoteID}`
                }, (error, response, body) => {
                data.status = response.statusCode;
                data.body = body;
                done();
            }).auth(null, null, true, process.env.TEST_VALID_TOKEN);
        });
        it("status 200", () => {
            expect(data.status).toBe(200);
        });
        it("check body", () => {
            expect(data.body.notes[0].length).toBe(0);

        });
    });
})