const express = require("express");
const usersController = require("../controllers/users.controllers.js");
var router = express.Router();

router.get("/login", usersController.loginForm);
router.post('/login', usersController.login);
router.get("/register", usersController.registerForm);
router.post("/register", usersController.register);

module.exports = router;