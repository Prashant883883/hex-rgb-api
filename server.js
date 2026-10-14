
/**
 * Starts the Hex-to-RGB Express server.
 *
 * The server listens for HTTP requests on the configured port.
 */

const app = require("./app");

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Hex-to-RGB API listening on port ${PORT}`);
});
