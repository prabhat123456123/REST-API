const { Sequelize, DataTypes, Model } = require("sequelize");
const sequelize = require("../config/database");
db = {};
db.sequelize = sequelize;
// db.Sequelize = Sequelize;

db.Contact = require("./contact")(sequelize, DataTypes, Model);
db.User = require("./user")(sequelize, DataTypes, Model);
db.sequelize
  .sync()
  .then(() => {})
  .catch((err) => {
    throw err;
  });
module.exports = db;
