# Hex to RGB API

A simple JavaScript project that converts hexadecimal color values to RGB values using a JavaScript library and a REST API built with Express.

## Project Features

- Hexadecimal to RGB conversion
- JavaScript library with a hex-to-RGB function
- Express REST API
- Unit tests for the conversion library
- Integration tests for the REST API
- Automated testing with Mocha and Chai
- API testing with Postman

## Requirements

- Node.js
- npm

## Installation

Clone the repository:

    git clone https://github.com/Prashant883883/hex-rgb-api.git

Open the project directory:

    cd hex-rgb-api

Install the required dependencies:

    npm install

## Running the Application

Start the Express server:

    node server.js

The server runs on:

http://localhost:3000

## API Usage

The REST API provides an endpoint for converting hexadecimal color values to RGB values.

Example request:

http://localhost:3000/hex-to-rgb?hex=FF5733

The hexadecimal value `FF5733` represents the RGB color:

`RGB(255, 87, 51)`

The API returns the converted RGB values in the response.

## Running the Tests

The project uses Mocha and Chai for automated testing.

Run the complete test suite:

    npx mocha

The test suite contains both unit tests and integration tests.

### Unit Tests

The unit tests test the `hexToRgb` library function directly.

They verify that the library correctly converts hexadecimal values into the expected RGB values.

### Integration Tests

The integration tests test the Express REST API route.

They send requests to the API and verify that the route returns the expected result.

The tests can be run separately without starting the main server manually.

## Testing with Postman

The REST API can also be tested manually using Postman.

First, start the server:

    node server.js

Then create a GET request in Postman:

http://localhost:3000/hex-to-rgb?hex=FF5733

Send the request and check the response returned by the API.

Postman is useful for manually checking API requests, parameters, and responses, while automated unit and integration tests are useful for repeatedly checking the expected behaviour of the software.

## Project Structure

    hex-rgb-api/
    │
    ├── tests/
    │   ├── api.test.js
    │   └── hexToRgb.test.js
    │
    ├── .gitignore
    ├── app.js
    ├── hexToRgb.js
    ├── package-lock.json
    ├── package.json
    └── server.js

## Main Files

### hexToRgb.js

Contains the JavaScript library function that converts hexadecimal color values into RGB values.

### app.js

Contains the Express application and the REST API route for converting hexadecimal values to RGB values.

### server.js

Starts the Express server and makes the API available for requests.

### tests/

Contains the automated unit and integration tests.

### package.json

Contains the project information, dependencies, and npm configuration.

### .gitignore

Contains files and directories that should not be included in the Git repository, such as `node_modules` and environment-specific files.

## Test Results

The automated test suite can be executed with:

    npx mocha

A successful test run confirms that the implemented library function and REST API route pass the automated tests.

The project was also tested manually using Postman to verify that the REST API responds correctly to API requests.

## Author

Prashant Bhandari

LAB University of Applied Sciences

## Repository

The complete implementation is available on GitHub:

https://github.com/Prashant883883/hex-rgb-api