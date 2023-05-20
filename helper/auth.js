module.exports = {
  checkUserType: function (types, token = true) {
    return function (req, res, next) {
      if (token) {
        const user = req.user;
        if (types.length) {
          if (!user || user.isAuth !== true)
            throw new ErrorHandler(401, "Not Authorized");

          //   if (!types.includes(user.type))
          //     throw new ErrorHandler(401, "Not Authorized");
        }
      }
      next();
    };
  },
};
