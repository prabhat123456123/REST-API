const jwt = require("jsonwebtoken");
const { SECRET } = require("../utils/Constant");
const { ErrorHandler } = require("./error");

const authorization = (req, res, next) => {
  const token = req.headers.token,
    user = {};

  if (!token) {
    return next(new ErrorHandler("login first to access resources", 400));
    // return next(new Error(401, "please provide token"));
  }
  jwt.verify(token, SECRET, function (error, decoded) {
    if (error) {
      return next(new ErrorHandler("token not Verified", 400));
    } else {
      user.detail = decoded.data[0];
      req.user = user;
      next();
    }
  });
};

module.exports = authorization;
