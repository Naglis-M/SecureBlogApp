# SecureBlogApp Insecure Branch

bcrypt is removed

SecureBlogApp is a Node.js web application for blogging with user authentication, built with Express.js and EJS templating.

## Installation

Before you begin, ensure you have [Node.js](https://nodejs.org/) installed on your machine.

Clone the repository to your local machine:

```bash
git clone https://github.com/Naglis-M/SecureBlogApp.git
cd SecureBlogApp
```
```bash
Install the necessary node packages:
npm install
```


This will install the following packages necessary for the application to run:

```bash
bcrypt: For hashing passwords.
connect-mongo: MongoDB session store for Connect and Express.
cookie-parser: Middleware to parse cookies.
dotenv: To load environment variables from a .env file.
ejs: Templating engine to render HTML pages.
express: Web application framework.
express-ejs-layouts: Layout support for EJS in Express.
express-session: Session middleware for Express.
jsonwebtoken: To generate JWT for authentication.
method-override: To use HTTP verbs such as PUT or DELETE in places where the client doesn't support it.
mongoose: MongoDB object modeling tool designed to work in an asynchronous environment.
nodemon (as a development dependency): Utility that will monitor for any changes in your source and automatically restart your server.
```

To install nodemon as a development dependency, you can run:
```bash
npm install nodemon --save-dev
```


