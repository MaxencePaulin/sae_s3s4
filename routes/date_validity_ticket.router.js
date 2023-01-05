import express from 'express';
import { findAll, findOne, create, remove, removeAll } from '../controllers/date_validity_ticket.controller.js';

const router = express.Router();

router.get('/', findAll);
/**
 * @swagger
 * /datevalidityticket:
 *   get:
 *      security:
 *          - bearerAuth: []
 *      description: Return all datevalidityticket
 *      tags:
 *          - datevalidityticket_routes
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
 * /datevalidityticket/ticket:
 *   get:
 *      description: Return datevalidityticket by date_start_validity and date_end_validity
 *      tags:
 *          - datevalidityticket_routes
 *      parameters:
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

router.post('/', create);
/**
 * @swagger
 * /datevalidityticket:
 *   post:
 *      description: Create a datevalidityticket
 *      tags:
 *          - datevalidityticket_routes
 *      requestBody:
 *          content:
 *             application/json:
 *                schema:
 *                    type: object
 *                    properties:
 *                        date_start_validity:
 *                            type: string
 *                            example: 2021-01-01
 *                            required: true
 *                        date_end_validity:
 *                            type: string
 *                            example: 2021-01-01
 *                            required: true
 *      responses:
 *          '201':
 *              description: Resource added successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
*/

router.delete('/one', remove);
/**
 * @swagger
 * /datevalidityticket/one:
 *   delete:
 *      description: Delete a datevalidityticket
 *      tags:
 *          - datevalidityticket_routes
 *      parameters:
 *          - in: query
 *            name: date_start_validity
 *            example: 2021-01-01
 *            schema: 
 *                type: string
 *            required: true
 *          - in: query
 *            name: date_end_validity
 *            example: 2021-01-01  
 *            schema: 
 *                type: string
 *            required: true
 *      responses:
 *          '204':
 *              description: Resource deleted successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
*/

router.delete('/', removeAll);
/**
 * @swagger
 * /datevalidityticket:
 *   delete:
 *      description: Delete all datevalidityticket
 *      tags:
 *          - datevalidityticket_routes
 *      responses:
 *          '204':
 *              description: Resource deleted successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
*/

export default router;