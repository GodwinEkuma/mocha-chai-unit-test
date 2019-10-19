const express = require("express");
const router = express.Router();
const UserController = require("./user.controller");

const userController = new UserController();

router.post("/register", userController.register);

module.exports = router;
