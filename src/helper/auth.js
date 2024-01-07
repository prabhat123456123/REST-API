const { ErrorHandler } = require("./error");
exports.authorizeRoles = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return next(
        new ErrorHandler(
          `${req.user.role} are not authorize to access this resource`,
          403
        )
      );
    }
    next();
  };
};
