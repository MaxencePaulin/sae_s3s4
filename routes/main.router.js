// main.router.js
import express from 'express';
import usersController from '../controllers/users.controller.js';
import ownersController from '../controllers/owners.controller.js';
import adminController from '../controllers/admin.controller.js';
import guestController from '../controllers/guest.controller.js';
import userController from '../controllers/user.controller.js';
import auth from '../middleware/authenticate.js';
let router=express.Router();
import {findProfesseur} from "../controllers/professeur.controller.js";

// localhost:3000/

// Configuration des routes

router.get("/professeur", findProfesseur);

router.get("owners/id=:id", ownersController.listOwnerById);
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

router.get("/owners",ownersController.listOwners);
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

router.get("/login", auth.authenticateData, auth.logged, usersController.loginForm);
router.post('/login', usersController.login);
router.get("/register", auth.authenticateData, auth.logged, usersController.registerForm);
router.post("/register", usersController.register);

router.get("/user", auth.authenticateToken, userController.test);
router.get("/guest", auth.authenticateGuest, guestController.test);
router.get("/admin", auth.authenticateAdmin,  adminController.test);
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
    // console.log(req.headers);
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

export default router;