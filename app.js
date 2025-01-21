const express = require("express");
const app = express();
const fruits = require("./routes/fruits");
const logger = require("./loggers");
// Middleware
app.use(express.json());
app.use(logger);

app.get("/", (req, res) => {
  res.send("Hello Fruity!");
});

app.use("/fruits", fruits);

module.exports = app;
