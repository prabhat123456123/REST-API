const express = require("express");
const swaggerUi = require("swagger-ui-express");
const swaggerJSDoc = require("swagger-jsdoc");
const swaggerOptions = require("./swagger/swaggerOptions.js");
const path = require("path");
const bodyParser = require("body-parser");
const helmet = require("helmet");
const sequelize = require("./config/database");
const { QueryTypes } = require("sequelize");
require("./models");
const { APPPORT } = require("./utils/Constant");
const authorization = require("./helper/jwt");

const { handleError } = require("./helper/handleError");

const app = express();

// const swaggerSpec = swaggerJSDoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerOptions));

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

// app.use((req, res, next) => {
//   console.log(req.originalUrl);
//   next();
// });

const user = require("./routes/user/user");

const task = require("./routes/task/task");

app.use("/v2/user", user);
app.use("/v2/task", authorization, task);
// app.use((req, res, next) => {
//   let err = new Error("Not Found");
//   err.status = 404;
//   console.log(req.originalUrl);
//   next();
// });
// app.use(function (err, req, res, next) {
//   if (err.code !== "EBADCSRFTOKEN") return next(err);
//   // handle CSRF token errors here
//   console.log(req.originalUrl, "Error");
//   next();
// });
// app.use(handleError);

app.listen(APPPORT, () => {
  console.log(`Server started on port ${APPPORT}`);
});

module.exports = app;
