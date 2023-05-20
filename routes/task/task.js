const express = require("express");
const router = express.Router();
const { checkUserType } = require("../../helper/auth");
const { user } = require("../../utils/userType");

const {
  tasksList,
  tasksDetails,
  saveTasks,
  updateTasks,
  deleteTasks,
} = require("../../controller/task/task");

router.get("/tasks-list", checkUserType([user]), tasksList);

router.get("/tasks-details/:id", checkUserType([user]), tasksDetails);

router.post("/save-tasks", checkUserType([user]), saveTasks);

router.put("/update-tasks/:id", checkUserType([user]), updateTasks);

router.delete("/delete-tasks/:id", checkUserType([user]), deleteTasks);

module.exports = router;
