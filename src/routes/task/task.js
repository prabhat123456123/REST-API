const express = require("express");
const router = express.Router();
const { authorizeRoles } = require("../../helper/auth");
const { user } = require("../../utils/userType");

const {
  tasksList,
  tasksDetails,
  saveTasks,
  updateTasks,
  deleteTasks,
} = require("../../controller/task/task");

router.get("/tasks-list", tasksList);

router.get("/tasks-details/:id", authorizeRoles("user"), tasksDetails);

router.post("/save-tasks", saveTasks);

router.put("/update-tasks/:id", authorizeRoles("user"), updateTasks);

router.delete("/delete-tasks/:id", authorizeRoles("user"), deleteTasks);

module.exports = router;
