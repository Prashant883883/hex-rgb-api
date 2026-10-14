
/**
 * Express application providing the hex-to-RGB REST API.
 */

const express = require("express");
const hexToRgb = require("./hexToRgb");

const app = express();

/**
 * Converts a hex color supplied in the query string to RGB.
 * Example: GET /api/hex-to-rgb?hex=%23FF8000
 */
app.get("/api/hex-to-rgb", (req, res) => {
    try {
        const rgb = hexToRgb(req.query.hex);
        res.status(200).json(rgb);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

module.exports = app;
