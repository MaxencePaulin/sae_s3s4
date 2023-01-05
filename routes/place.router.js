import express from 'express';
import { findAll, findOne, create, update, remove, removeAll } from '../controllers/place.controller.js';

const router = express.Router();

router.get('/', findAll);
/**
 * @swagger
 * /place:
 *   get:
 *      description: Return all place
 *      tags:
 *          - Place routes
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
 * /place/{id}:
 *   get:
 *      description: Return place by id
 *      tags:
 *          - Place routes
 *      parameters:
 *          - in: path
 *            name: id
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
 * /place:
 *   post:
 *      description: Create a place
 *      tags:
 *          - Place routes
 *      requestBody:
 *          content:
 *             application/json:
 *                schema:
 *                    type: object
 *                    properties:
 *                        no_place:
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

router.put('/:id', update);
/**
 * @swagger
 * /place/{id}:
 *   put:
 *      description: Update a place
 *      tags:
 *          - Place routes
 *      parameters:
 *          - in: path
 *            name: id
 *            schema: 
 *                type: integer
 *            required: true
 *      requestBody:
 *          content:
 *             application/json:
 *                schema:
 *                    type: object
 *                    properties:
 *                        no_place:
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
 * /place/{id}:
 *   delete:
 *      description: Delete a place
 *      tags:
 *          - Place routes
 *      parameters:
 *          - in: path
 *            name: id
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
 * /place:
 *   delete:
 *      description: Delete all place
 *      tags:
 *          - Place routes
 *      responses:
 *          '200':
 *              description: Resource added successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */

export default router;
