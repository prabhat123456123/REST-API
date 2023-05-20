const Sequelize = require("sequelize");
const { QueryTypes } = require("sequelize");
const Op = Sequelize.Op;
const sequelize = require("../../config/database");
const { getDate } = require("../../helper/time");
const { ErrorHandler } = require("../../helper/error");
const bcrypt = require("bcryptjs");
module.exports = {
  login: async (body) => {
    try {
      const data = await sequelize.query("SELECT * FROM user where email = ?", {
        replacements: [body.email],
        type: QueryTypes.SELECT,
      });
      if (data.length) {
        const isMatch = await bcrypt.compare(body.password, data[0].password);

        if (isMatch) {
          return data;
        }
      }
    } catch (error) {
      throw new ErrorHandler(500, error);
    }
  },
  saveUser: async (body) => {
    try {
      const currentTime = getDate("YYYY-MM-DD HH:mm:ss");
      const data = await sequelize.query(
        "SELECT * FROM user where email = ? AND phone=?",
        {
          replacements: [body.email, body.phone],
          type: QueryTypes.SELECT,
        }
      );
      if (data.length > 0) {
        return "user already registered";
      } else {
        let hashedpassword = await bcrypt.hash(body.password, 8);
        console.log(hashedpassword);
        await sequelize.query(
          "INSERT INTO user(name,email,phone,password,created_at) VALUES (?,?,?,?,?)",
          {
            replacements: [
              body.name,
              body.email,
              body.phone,
              hashedpassword,
              currentTime,
            ],
            type: QueryTypes.INSERT,
          }
        );
        return true;
      }
    } catch (error) {
      throw new ErrorHandler(500, error);
    }
  },
};
