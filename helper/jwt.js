const jwt = require("jsonwebtoken");
const { SECRET } = require("../utils/Constant");

const authorization = (req, res, next) => {
  const token = req.headers.token,
    user = {};

  if (!token) {
    user.isAuth = false;
    return next(new Error(401, "please provide token"));
  }
  jwt.verify(token, SECRET, function (error, decoded) {
    if (error) {
      user.isAuth = false;
      return next();
    } else {
      user.isAuth = true;
      user.type = decoded.data[0].id;
      req.user = user;
      next();
    }
  });
};

module.exports = authorization;
