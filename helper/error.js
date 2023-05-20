class ErrorHandler extends Error {
  constructor(statusCode, message) {
    super();
    this.statusCode = statusCode;
    this.message = message;
  }
}

const handleError = (err, req, res) => {
  console.log(err);
  const { statusCode, message } = err;

  if (statusCode === 500) {
    // console.log("500");
    return res.status(statusCode).json({
      status: "Failure",
      msg: "Server Error",
    });
  } else {
    // console.log("222");

    return res.status(statusCode).json({
      status: "Failure",
      msg: message,
    });
  }
};
module.exports = {
  ErrorHandler,
  handleError,
};
