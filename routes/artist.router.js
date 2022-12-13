import express from 'express';
import { findAll, findOne, create, update, remove, removeAll } from '../controllers/artist.controller.js';

const router = express.Router();

router.get('/', findAll);
/**
 * @swagger
 * /artist:
 *   get:
 *      description: Return all artist
 *      tags:
 *          - artist_routes
 *      responses:
 *          '200':
 *              description: Resource added successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */

router.get('/:id', findOne);
/**
 * @swagger
 * /artist/{id}:
 *   get:
 *      description: Return artist by id
 *      tags:
 *          - artist_routes
 *      parameters:
 *          - in: path
 *            name: id
 *            schema:
 *              type: integer
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
 * /artist:
 *   post:
 *      security:
 *          - bearerAuth: []
 *      description: Create an artist
 *      tags:
 *          - artist_routes
 *      requestBody:
 *          content:
 *             application/json:
 *                schema:
 *                    type: object
 *                    properties:
 *                        name:
 *                          type: string
 *                          required: true
 *                        image:
 *                          type: string
 *                          required: true
 *                        biography:
 *                          type: string
 *                          required: true
 *                        genre:
 *                          type: string
 *                          required: true
 *      responses:
 *          '201':
 *              description: Resource added successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */

router.put('/:id', update);
/**
 * @swagger
 * /artist/{id}:
 *   put:
 *      security:
 *          - bearerAuth: []
 *      description: Update an artist
 *      tags:
 *          - artist_routes
 *      parameters:
 *          - in: path
 *            name: id
 *            schema:
 *              type: integer
 *          required: true
 *      requestBody:
 *          content:
 *             application/json:
 *                schema:
 *                    type: object
 *                    properties:
 *                        name:
 *                          type: string
 *                          required: true
 *                        image:
 *                          type: string
 *                          required: true
 *                        biography:
 *                          type: string
 *                          required: true
 *                        genre:
 *                          type: string
 *                          required: true
 *      responses:
 *          '200':
 *              description: Resource added successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */

router.delete('/:id', remove);
/**
 * @swagger
 * /artist/{id}:
 *   delete:
 *      security:
 *          - bearerAuth: []
 *      description: Delete an artist
 *      tags:
 *          - artist_routes
 *      parameters:
 *          - in: path
 *            name: id
 *            schema:
 *              type: integer
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
 * /artist:
 *   delete:
 *      description: Delete all artist
 *      tags:
 *          - artist_routes
 *      responses:
 *          '200':
 *              description: Resource added successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */

export default router;