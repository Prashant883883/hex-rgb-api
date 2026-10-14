
/**
 * Integration tests for the Express hex-to-RGB API.
 */

const { assert } = require("chai");
const request = require("supertest");
const app = require("../app");

describe("Hex-to-RGB API integration tests", function () {
    it("returns RGB values for a valid hex color", async function () {
        const response = await request(app)
            .get("/api/hex-to-rgb")
            .query({ hex: "#FF8000" });

        assert.equal(response.status, 200);
        assert.deepEqual(response.body, {
            r: 255,
            g: 128,
            b: 0
        });
    });

    it("returns HTTP 400 for an invalid hex color", async function () {
        const response = await request(app)
            .get("/api/hex-to-rgb")
            .query({ hex: "#GG0000" });

        assert.equal(response.status, 400);
        assert.equal(
            response.body.error,
            "Invalid hex color. Use six hexadecimal digits."
        );
    });

    it("returns HTTP 400 when the hex parameter is missing", async function () {
        const response = await request(app)
            .get("/api/hex-to-rgb");

        assert.equal(response.status, 400);
        assert.equal(
            response.body.error,
            "Hex color must be a string"
        );
    });
});
