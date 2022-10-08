const express = require("express");
const usersController = require("../controllers/users.controllers.js");
var router = express.Router();

router.post('/check', usersController.login);
router.get("/register", usersController.registerForm);
router.get("/", usersController.loginForm);

module.exports = router;