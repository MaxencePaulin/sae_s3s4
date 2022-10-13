// main.router.js
const express = require("express");
const usersController = require("../controllers/users.controllers");
const adminRoutes = require("../routes/admin.router");
const ownersRoutes = require("./owners.router");
const scenesRoutes = require("./scenes.router");
const usersRoutes = require("./users.router");
const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
let router=express.Router();

/** Swagger Initialization - START */
const swaggerOption = {
    swaggerDefinition: (swaggerJsdoc.Options = {
        info: {
            title: "SAE S3S4",
            description: "API documentation",
            contact: {
                name: [
                    "Maxence PAULIN",
                    "Baptiste LAVAL",
                    "Antoine PERRIN",
                    "Antoine LACHAT",
                    "Taha MOUMEN"
                ],
            },
            servers: ["http://localhost:3000/"],
        },
    }),
    apis: ["server.js", "./routes/*.js"],
};
const swaggerDocs = swaggerJsdoc(swaggerOption);

// localhost:3000/

// Configuration des routes

router.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));
router.use("/api/api-docs", (req, res) => {
    res.redirect("/api-docs");
});

router.use("/owners", ownersRoutes);
router.use("/api/owners", (req, res) => {
    res.redirect("/owners");
});

router.use("/scenes", scenesRoutes);
router.use("/api/scenes", (req, res) => {
    res.redirect("/scenes");
});

router.use("/users", usersRoutes);

router.get("/login", usersController.loginForm);
router.post('/login', usersController.login);
router.get("/register", usersController.registerForm);
router.post("/register", usersController.register);
router.use("/admin",  adminRoutes)

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