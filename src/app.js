const express = require("express");
const app = express();
const errorHandler = require("./lib/middleware/error-handler");
const ratingsApp = require("./ratings/routes");

app.use("/ratings", ratingsApp);

app.use(errorHandler());

module.exports = app;
