// main.router.js
const express = require("express");
const usersControllers = require("../controllers/users.controllers");
const ownersControllers = require("../controllers/owners.controllers");
const scenesControllers = require("../controllers/scenes.controllers");
const adminControllers = require("../controllers/admin.controllers");
const guestControllers = require("../controllers/guest.controllers");
const userControllers = require("../controllers/user.controllers");
const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const auth = require("../middleware/authenticate");
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

router.get("owners/id=:id", ownersControllers.listOwnerById);
/**
 * @swagger
 * /owners/id={id}:
 *   get:
 *      description: Display owner with id = {id}
 *      tags:
 *          - owners
 *      parameters:
 *          - in: path
 *            name: id
 *            description: Owner ID
 *            required: true
 *            type: integer
 *      responses:
 *          '200':
 *              description: Resource updated successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */

router.get("/owners",ownersControllers.listOwners);
/**
 * @swagger
 * /owners:
 *   get:
 *      description: List all owners
 *      tags:
 *          - owners
 *      parameters:
 *          - in: query
 *            name: page
 *            description: Number of the page
 *            required: false
 *            type: integer
 *          - in: query
 *            name: limit
 *            description: Limit of result per page
 *            required: false
 *            type: integer
 *      responses:
 *          '200':
 *              description: Resource updated successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */

router.get("/scenes/id=:id", scenesControllers.listSceneById);
/**
 * @swagger
 * /scenes/id={id}:
 *   get:
 *      description: Display scene with id = {id}
 *      tags:
 *          - scenes
 *      parameters:
 *          - in: path
 *            name: id
 *            description: Scene ID
 *            required: true
 *            type: integer
 *      responses:
 *          '200':
 *              description: Resource updated successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */

router.get("/scenes", scenesControllers.listScenes);
/**
 * @swagger
 * /scenes:
 *   get:
 *      description: Display all scene
 *      tags:
 *          - scenes
 *      parameters:
 *          - in: query
 *            name: page
 *            description: Number of the page
 *            required: false
 *            type: integer
 *          - in: query
 *            name: limit
 *            description: Limit of result per page
 *            required: false
 *            type: integer
 *      responses:
 *          '200':
 *              description: Resource updated successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */

router.get("/login", auth.authenticateData, usersControllers.loginForm);
router.post('/login', usersControllers.login);
router.get("/register", auth.authenticateData, usersControllers.registerForm);
router.post("/register", usersControllers.register);

router.get("/user", auth.authenticateToken, userControllers.test);
router.get("/guest", auth.authenticateGuest, guestControllers.test);
router.get("/admin", auth.authenticateAdmin,  adminControllers.test);
/**
 * @swagger
 * /admin:
 *   get:
 *      description: Display admin page
 *      tags:
 *          - admin
 *      parameters:
 *          - in: header
 *            name: authorization
 *            description: Token of the user
 *            required: false
 *            type: string
 *      responses:
 *          '200':
 *              description: Resource updated successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */

router.get("/", auth.authenticateData, (req, res) => {
    console.log(req.headers);
    let username = req.user ? req.user.username : "";
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

        ],
        username: username
    });
});

module.exports = router;