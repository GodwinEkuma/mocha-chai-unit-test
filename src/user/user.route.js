const express = require("express");
const router = express.Router();
const UserController = require("./user.controller");
const { userService } = require("./dependency");

const userController = new UserController(userService);

router.post("/user", (req, res) => userController.register(req, res));
router.get("/user/:id", (req, res) => userController.getUser(req, res));

module.exports = router;
