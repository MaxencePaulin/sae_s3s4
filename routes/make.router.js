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
 *      description: Retur id artiste and id style
 *      tags:
 *          - Make_routes
 *      parameters:
 *          - in: query
 *            name: id_artist
 *            schema: 
 *                type: integer
 *            required: true
 *          - in: query
 *            name: id_musicstyle
 *            schema: 
 *                type: integer
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
 *      security:
 *          - bearerAuth: []
 *      description: Create an artist
 *      tags:
 *          - Make_routes
 *      requestBody:
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          id_artist:
 *                            type: integer
 *                            required: true
 *                          id_musicstyle:
 *                            type: integer
 *                            required: true
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
 *      security:
 *          - bearerAuth: []
 *      description: Delete an artist
 *      tags:
 *          - Make_routes
 *      parameters:
 *          - in: query
 *            name: id_artist
 *            schema: 
 *                type: integer
 *            required: true
 *          - in: query
 *            name: id_musicstyle
 *            schema: 
 *                type: integer
 *            required: true
 *      responses:
 *          '200':
 *              description: Resource added successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
*/

router.delete('/', removeAll);
/**
 * @swagger
 * /make:
 *   delete:
 *      security:
 *          - bearerAuth: []
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
