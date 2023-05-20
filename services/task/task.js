const Sequelize = require("sequelize");
const { QueryTypes } = require("sequelize");
const Op = Sequelize.Op;
const sequelize = require("../../config/database");
const { getDate } = require("../../helper/time");
const { ErrorHandler } = require("../../helper/error");

module.exports = {
  tasksList: async (body, query) => {
    try {
      const orderByColumn = query.column || "id";
      const orderByDirection = query.direction || "desc";
      var page = parseInt(query.page) || 1;
      var limit = parseInt(query.limit) || 3;
      var skip = (page - 1) * limit;
      const data = await sequelize.query(
        `SELECT * FROM task ORDER BY ${orderByColumn} ${orderByDirection} LIMIT ${parseInt(
          limit
        )} OFFSET ${parseInt(skip)}`,
        {
          type: QueryTypes.SELECT,
        }
      );
      return data;
    } catch (error) {
      throw new ErrorHandler(500, error);
    }
  },
  saveTasks: async (body) => {
    try {
      const currentTime = getDate("YYYY-MM-DD HH:mm:ss");
      const data = await sequelize.query(
        "INSERT INTO task(title,description,status,created_at) VALUES (?,?,?,?)",
        {
          replacements: [
            body.title,
            body.description,
            body.status,
            currentTime,
          ],
          type: QueryTypes.INSERT,
        }
      );

      return true;
    } catch (error) {
      throw new ErrorHandler(500, error);
    }
  },
  updateTasks: async (body, params) => {
    try {
      const data = await sequelize.query(
        "UPDATE task SET title=?, description = ?, status = ? where id = ?",
        {
          replacements: [body.title, body.description, body.status, params.id],
          type: QueryTypes.UPDATE,
        }
      );

      return true;
    } catch (error) {
      throw new ErrorHandler(500, error);
    }
  },
  tasksDetails: async (params) => {
    try {
      const data = await sequelize.query("SELECT * FROM task where id = ?", {
        replacements: [params.id],
        type: QueryTypes.SELECT,
      });

      return data;
    } catch (error) {
      throw new ErrorHandler(500, error);
    }
  },
  deleteTasks: async (params) => {
    try {
      const data = await sequelize.query("DELETE FROM task where id = ?", {
        replacements: [params.id],
        type: QueryTypes.DELETE,
      });

      return data;
    } catch (error) {
      throw new ErrorHandler(500, error);
    }
  },
};
