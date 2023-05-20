const sequelize = require("../../config/database");

const {
  tasksList,
  saveTasks,
  updateTasks,
  tasksDetails,
  deleteTasks,
} = require("../../services/task/task");

exports.tasksList = async (req, res, next) => {
  try {
    // console.log(req.user);
    const data = await tasksList(req.body, req.query);
    return res.send({
      status: "Success",
      data: data,
      pageLength: data.length,
    });
  } catch (error) {
    next(error);
  }
};
exports.tasksDetails = async (req, res, next) => {
  try {
    const data = await tasksDetails(req.params);

    return res.send({
      status: "Success",
      data: data,
    });
  } catch (error) {
    console.error(error);
    next(error);
  }
};
exports.saveTasks = async (req, res, next) => {
  try {
    const data = await saveTasks(req.body);

    return res.send({
      status: "Success",
      data: data,
    });
  } catch (error) {
    console.error(error);
    next(error);
  }
};
exports.updateTasks = async (req, res, next) => {
  try {
    const data = await updateTasks(req.body, req.params);

    return res.send({
      status: "Success",
      data: data,
    });
  } catch (error) {
    console.error(error);
    next(error);
  }
};
exports.deleteTasks = async (req, res, next) => {
  try {
    const data = await deleteTasks(req.params);

    return res.send({
      status: "Success",
      data: data,
    });
  } catch (error) {
    console.error(error);
    next(error);
  }
};
