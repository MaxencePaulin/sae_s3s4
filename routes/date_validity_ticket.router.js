import express from 'express';
import { findAll, findOne, create, remove, removeAll } from '../controllers/date_validity_ticket.controller.js';

const router = express.Router();

router.get('/', findAll);
/**
 * @swagger
 * /datevalidityticket:
 *   get:
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
 *          - in: path
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
 * /datevalidityticket:
 *   post:
 *      description: Create a datevalidityticket
 *      tags:
 *          - datevalidityticket_routes
 *      parameters:
 *          - in: body
 *            name: datevalidityticket
 *            description: The datevalidityticket to create.
 *            schema:
 *              type: object
 *              required:
 *                  - date_start_validity
 *                  - date_end_validity
 *              properties:
 *                  date_start_validity:
 *                      type: string
 *                  date_end_validity:
 *                      type: string
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
 *          - in: body
 *            name: datevalidityticket
 *            description: The datevalidityticket to delete.
 *            schema:
 *              type: object
 *              required:
 *                  - date_start_validity
 *                  - date_end_validity
 *              properties:
 *                  date_start_validity:
 *                      type: string
 *                  date_end_validity:
 *                      type: string
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