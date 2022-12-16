import express from "express";
import { findAll, findOne, create, update, remove, removeAll } from "../controllers/scene.controller.js";

const router = express.Router();

router.get('/', findAll);
/**
 * @swagger
 * /scene:
 *   get:
 *      description: Display scenes
 *      tags:
 *          - scene
 *      parameters:
 *          - in: query
 *            name: page
 *            description: Number of the page (when id is not specified)
 *            required: false
 *            type: integer
 *          - in: query
 *            name: limit
 *            description: Limit of result per page (when id is not specified)
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

router.get('/:id', findOne);
/**
 * @swagger
 * /scene/{id}:
 *   get:
 *      description: Display scene specified with id = {id}
 *      tags:
 *          - scene
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

router.post('/', create);
/**
 * @swagger
 * /scene:
 *   post:
 *      description: add a scene
 *      tags:
 *          - scene
 *      requestBody:
 *          content:
 *             application/json:
 *                schema:
 *                   type: object
 *                   properties:
 *                       libelle_scene:
 *                           type: integer
 *                           example: scene6
 *                       id_typescene:
 *                           type: integer
 *                           example: 1
 *      responses:
 *          '200':
 *              description: Resource updated successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */

router.put('/:id', update);
/**
 * @swagger
 * /scene/{id}:
 *   put:
 *      description: edit one scene specified with id = {id}
 *      tags:
 *          - scene
 *      parameters:
 *          - in: path
 *            name: id
 *            description: Scene ID
 *            required: true
 *            type: integer
 *      requestBody:
 *          content:
 *             application/json:
 *                schema:
 *                   type: object
 *                   properties:
 *                       libelle_scene:
 *                           type: integer
 *                           example: scene6
 *                       id_typescene:
 *                           type: integer
 *                           example: 1
 *      responses:
 *          '200':
 *              description: Resource updated successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */

router.delete('/:id', remove);
/**
 * @swagger
 * /scene/{id}:
 *   delete:
 *      description: delete one scene specified with id = {id}
 *      tags:
 *          - scene
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

router.delete('/', removeAll);
/**
 * @swagger
 * /scene/{id}:
 *   delete:
 *      description: delete all scenes
 *      tags:
 *          - scene
 *      responses:
 *          '200':
 *              description: Resource updated successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */

export default router;