// owners.router.js
const express = require("express");
const {listOwners, listOwnerById} = require("../controllers/owners.controllers.js");
var router=express.Router();
// localhost:3000/owners
router.get("/id=:id", listOwnerById);
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

router.get("/",listOwners);
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

module.exports = router;