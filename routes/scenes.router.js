// scenes.router.js
const express = require("express");
const {listScenes, listSceneById} = require("../controllers/scenes.controllers.js");
var router=express.Router();
// localhost:3000/scenes
router.get("/id=:id", listSceneById);
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

router.get("/",listScenes);
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

module.exports = router;