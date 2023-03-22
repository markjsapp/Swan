# Project Name

Swan is a testing framework designed to test a Spotify API client application. This framework uses Mocha as the test runner, Chai for assertions, Sinon for test isolation, and Supertest for testing HTTP requests to the API. The framework is structured to test both successful and erroneous scenarios for API endpoints, ensuring that the application behaves as expected under various conditions.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Libraries](#libraries)
- [Tests](#tests)
- [Contributing](#contributing)
- [License](#license)

## Installation

git clone https://github.com/yourusername/yourproject.git
cd yourproject
npm install

## Usage

At the moment there are no custom scripts other than running the test:
npm start

Additionally if you want to run a specific test you can a '.only' to an 'it' or 'describe' block. 

## Libraries

A A quick overview of the libraries/dependencies involved:

- [Express](https://expressjs.com/) - A minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.
- [Axios](https://axios-http.com/docs/intro): A promise-based HTTP client for making requests to RESTful APIs. It is lightweight and easy to use, with built-in support for handling common tasks like making GET and POST requests, handling errors, and more.
- [Chai](https://www.chaijs.com/): A popular assertion library for testing JavaScript applications. It provides a fluent, chainable syntax for writing tests and supports various assertion styles, including BDD (Behavior Driven Development) and TDD (Test Driven Development).
- [Dotenv](https://www.npmjs.com/package/dotenv): A module that loads environment variables from a .env file into process.env. This makes it easy to manage different configurations for development, testing, and production environments.
- [Mocha](https://mochajs.org/): A feature-rich JavaScript test framework running on Node.js and in the browser, making asynchronous testing simple and fun. It provides a flexible way to organize and run tests, with support for various interfaces and reporters.
- [Sinon](https://sinonjs.org/): A powerful testing library that provides test spies, stubs, and mocks for JavaScript. It helps with test isolation and provides advanced functionality for testing complex scenarios.
- [Supertest](https://www.npmjs.com/package/supertest): A library for testing Node.js HTTP servers. It provides a high-level abstraction for testing HTTP, allowing you to write tests for your API endpoints easily and quickly.
- [Mochaawesome](https://www.npmjs.com/package/mochawesome): Mochawesome is a custom reporter for use with the Javascript testing framework, mocha. It runs on Node.js (>=10) and works in conjunction with mochawesome-report-generator to generate a standalone HTML/CSS report to help visualize your test runs.

## Reporting

By default, the src/data/report folder is added to the gitignore at the moment while I decide whether or not to add additional features. In the meantime, to enable Mochawesome reporting, follow these steps:

1. Install mochawesome with `npm i mochawesome`.
2. Create a `mocha.json` file in the `src/utils` directory.
3. Add the following configuration to the `mocha.json` file:

{
  "require": "dotenv/config",
  "reporter": "mochawesome",
  "reporter-option": [
    "reportDir=src/data/report",
    "reportFilename=index",
    "quiet=true"
  ]
}

## License
[MIT](LICENSE)