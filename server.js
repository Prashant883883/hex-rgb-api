
/**
 * Starts the Express API server.
 */

const app = require("./app");

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Hex-to-RGB API listening on port ${PORT}`);
});
