const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");

const path = require("path");

const errorMiddleware = require("./middleware/errors");

// Config

app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));


// Route Imports

const user = require("./routes/userRoutes");




app.use("", user);






// Middleware for Errors
app.use(errorMiddleware);

module.exports = app;