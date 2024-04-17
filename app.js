const express = require('express');
const cors = require('cors');
const app = express();
const router = require("./app/routes/index.js");

app.use(express.json());
app.use("/api", router);

module.exports = app;