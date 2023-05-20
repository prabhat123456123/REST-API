const sequelize = require("../../config/database");
const jwt = require("jsonwebtoken");

const { SECRET } = require("../../utils/Constant");
const { saveUser, login } = require("../../services/user/user");

exports.saveUser = async (req, res, next) => {
  try {
    const data = await saveUser(req.body);
    return res.send({
      status: "Success",
      data: data,
    });
  } catch (error) {
    next(error);
  }
};
exports.login = async (req, res, next) => {
  try {
    const data = await login(req.body);

    if (data.length) {
      jwt.sign(
        {
          data,
        },
        SECRET,

        async (error, token) => {
          if (error) {
            throw error;
          }

          return res.send({
            status: "Success",
            data: {
              details: data,
              token: token,
            },
          });
        }
      );
    } else {
      return res.status(500).send({ status: "Failure", msg: msg });
    }
  } catch (error) {
    console.error(error);
    next(error);
  }
};
