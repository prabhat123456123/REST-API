const express = require("express");
const router = express.Router();

const { saveUser, login } = require("../../controller/user/user");


router.post("/save-user", saveUser);
router.post("/login", login);


module.exports = router;
