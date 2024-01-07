const { ErrorHandler } = require("./error");

module.exports = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;

  if (process.env.NODE_ENV === "DEVELOPEMENT") {
    res.status(err.statusCode).json({
      success: false,
      error: err,
      Meaasge: err.message,
      Stack: err.stack,
    });
  }

  if (process.env.NODE_ENV === "PRODUCTION") {
    let error = { ...err };
    error.message = err.message;
    // wrong mongoose object Id Error
    if (err.name === "CastError") {
      const message = `resources not found ${err.path}`;
      error = new ErrorHandler(message, 400);
    }

    // wrong mongoose validation Error
    if (err.name === "validationError") {
      const message = object.values(err.errors).map((value) => value.message);
      error = new ErrorHandler(message, 400);
    }
    res.status(error.statusCode).json({
      success: false,
      message: error.message || "internal Server Error",
    });
  }
};
