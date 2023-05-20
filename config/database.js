const Sequelize = require("sequelize");


const { host, user, password, database } = require("../utils/Constant");

const sequelize = new Sequelize(
  database,
  user,
  password,
  {
    dialectOptions: {
      multipleStatements: true, //This will allow you to send multiple queries at once. By default it is disabled for security reasons.
    },
    dialect: "mysql",
    timezone: "+05:30",
    host: host,
    define: {
      //prevent sequelize from pluralizing table names
      freezeTableName: true,
    },
    logging: false, //Disable Query log in the console during development.
  },
  {
    pool: {
      max: 1000,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  }
);

module.exports = sequelize;
