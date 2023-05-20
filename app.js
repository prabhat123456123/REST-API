const express = require("express");

const path = require("path");
const bodyParser = require("body-parser");
const helmet = require("helmet");
const sequelize = require("./config/database");
const { QueryTypes } = require("sequelize");

const { APPPORT } = require("./utils/Constant");
const authorization = require("./helper/jwt");

const { handleError } = require("./helper/error");

const app = express();
app
  .use(helmet())
  .use(
    bodyParser.urlencoded({
      limit: "100mb",
      extended: true,
      parameterLimit: 50000,
    })
  )
  .use(bodyParser.json({ limit: "100mb" }))
  .use(express.static(path.join(__dirname, "public")));

app.use((req, res, next) => {
  console.log(req.originalUrl);
  next();
});

const user = require("./routes/user/user");

const task = require("./routes/task/task");

app.use("/user", user);
app.use("/task", authorization, task);

app.use((err, req, res, next) => {
  handleError(err, req, res);
});

app.listen(APPPORT, () => {
  console.log(`Server started on port ${APPPORT}`);
});

sequelize
  .sync()
  .then(() => {})
  .catch((err) => {
    throw err;
  });
module.exports = app;
