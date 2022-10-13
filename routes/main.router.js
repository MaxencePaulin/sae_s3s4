// main.router.js
const express = require("express");
const usersController = require("../controllers/users.controllers");
let router=express.Router();
// localhost:3000/

router.get("/login", usersController.loginForm);
router.post('/login', usersController.login);
router.get("/register", usersController.registerForm);
router.post("/register", usersController.register);

router.get("/", (req, res) => {
    res.render("home", {
        posts: [
            {
                author: "Maxence",
                image: "https://picsum.photos/500/500",
                comments: ["En cours de développement"]
            },
            {
                author: "Antoine",
                image: "https://picsum.photos/500/500?2",
                comments: ["En cours de développement"]
            },
            {
                author: "Baptiste",
                image: "https://picsum.photos/500/500?3",
                comments: ["En cours de développement"]
            },
            {
                author: "Antoine",
                image: "https://picsum.photos/500/500?4",
                comments: ["En cours de développement"]
            },
            {
                author: "Taha",
                image: "https://picsum.photos/500/500?5",
                comments: ["En cours de développement"]
            }

        ]
    });
});

module.exports = router;