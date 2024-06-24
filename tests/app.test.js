const request = require('supertest');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { StatusCodes } = require('http-status-codes');

require('dotenv').config();

// Set up the express app
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors("*"));
app.use(express.json());

// Define the route
app.get('/api/version-01/testing', async (request, response) => {
    try {
        response.status(StatusCodes.OK).send("Testing was a success");
    } catch (error) {
        response.send(error);
    }
});

// Test for the route
describe('GET /api/version-01/testing', () => {
    it('should return a success message', async () => {
        const res = await request(app).get('/api/version-01/testing');
        expect(res.statusCode).toEqual(200);
        expect(res.text).toBe("Testing was a success");
    });
});

