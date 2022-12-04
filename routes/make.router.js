import express from 'express';
import { findAll, findOne, create, remove, removeAll } from '../controllers/make.controller.js';

const router = express.Router();

router.get('/', findAll);
/**
 * @swagger
 * /make:
 *   get:
 *      description: Return all make
 *      tags:
 *          - Make_routes
 *      responses:
 *          '200':
 *              description: Resource added successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
*/

router.get('/one', findOne);
/**
 * @swagger
 * /make/one:
 *   get:
 *      description: Return artist by id_artiste
 *      tags:
 *          - Make_routes
 *      parameters:
 *          - in: query
 *            name: id_artist
 *            type: integer
 *            required: true
 *          - in: query
 *             name: id_musicstyle
 *             type: integer
 *            required: true
 *      responses:
 *          '200':
 *              description: Resource added successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
*/

router.post('/', create);
/**
 * @swagger
 * /make:
 *   post:
 *      description: Create an artist
 *      tags:
 *          - Make_routes
 *      parameters:
 *          - in: body
 *            name: make
 *            description: The make to create.
 *            schema:
 *              type: object
 *              required:
 *                  - id_artist
 *                  - id_musicstyle
 *              properties:
 *                  id_artist:
 *                      type: integer
 *                  id_musicstyle:
 *                      type: integer
 *      responses:
 *          '200':
 *              description: Resource added successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
*/

router.delete('/one', remove);
/**
 * @swagger
 * /make/one:
 *   delete:
 *      description: Delete an artist
 *      tags:
 *          - Make_routes
 *      parameters:
 *          - in: body
 *            name: make
 *            description: The make to delete.
 *            schema:
 *              type: object
 *              required:
 *                  - id_artist
 *                  - id_musicstyle
 *              properties:
 *                  id_artist:
 *                      type: integer
 *                  id_musicstyle:
 *                      type: integer
 *      responses:
 *          '200':
 *              description: Resource added successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
*/

router.delete('/all', removeAll);
/**
 * @swagger
 * /make/all:
 *   delete:
 *      description: Delete all make
 *      tags:
 *          - Make_routes
 *      responses:
 *          '200':
 *              description: Resource added successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
*/

export default router;
