import express from 'express';
import { findAll, findOne, create, remove, removeAll } from '../controllers/bought.controller.js';

const router = express.Router();

router.get('/', findAll);
/**
 * @swagger
 * /bought:
 *   get:
 *      security:
 *          - bearerAuth: []
 *      description: Return all bought
 *      tags:
 *          - Bought_routes
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
 * /bought/one:
 *   get:
 *      description: Return user by id
 *      tags:
 *          - Bought_routes
 *      parameters:
 *          - in: query
 *            name: id_user
 *            type: integer
 *            required: true
 *          - in: query
 *            name: id_ticket
 *            type: integer
 *            required: true
 *          - in: query
 *            name: date_start_validity
 *            type: string
 *            required: true
 *          - in: query
 *            name: date_end_validity
 *            type: string
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
 * /bought:
 *   post:
 *      description: Create an bought
 *      tags:
 *          - Bought_routes
 *      requestBody:
 *          content:
 *             application/json:
 *                schema:
 *                    type: object
 *                    properties:
 *                        id_user:
 *                            type: integer
 *                            example: 1
 *                            required: true
 *                        id_ticket:
 *                            type: integer
 *                            example: 2
 *                            required: true
 *                        date_start_validity:
 *                            type: string
 *                            example: 2021-01-01
 *                            required: true
 *                        date_end_validity:
 *                            type: string
 *                            example: 2021-01-01
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
 * /bought/one:
 *   delete:
 *      description: Delete an bought
 *      tags:
 *          - Bought_routes
 *      parameters:
 *          - in: query
 *            name: id_user
 *            schema: 
 *                type: integer
 *            required: true
 *          - in: query
 *            name: id_ticket
 *            schema: 
 *                type: integer
 *            required: true
 *          - in: query
 *            name: date_start_validity
 *            schema: 
 *                type: string
 *            required: true
 *          - in: query
 *            name: date_end_validity
 *            schema: 
 *                type: string
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
 * /bought:
 *   delete:
 *      description: Delete all bought
 *      tags:
 *          - Bought_routes
 *      responses:
 *          '200':
 *              description: Resource added successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
*/

export default router;