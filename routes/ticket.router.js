import express from 'express';
import { findAll, findOne, create, update, remove, removeAll } from '../controllers/ticket.controller.js';

const router = express.Router();

router.get('/', findAll);
/**
 * @swagger
 * /ticket:
 *   get:
 *      security:
 *          - bearerAuth: []
 *      description: Return all ticket
 *      tags:
 *          - Ticket_routes
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
 * /ticket/{id}:
 *   get:
 *      security:
 *          - bearerAuth: []
 *      description: Return one ticket
 *      tags:
 *          - Ticket_routes
 *      parameters:
 *          - in: path
 *            name: id
 *            schema:
 *              type: string
 *            required: true
 *            description: Ticket id
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
 * /ticket:
 *   post:
 *      security:
 *          - bearerAuth: []
 *      description: Create one ticket
 *      tags:
 *          - Ticket_routes
 *      requestBody:
 *          content:
 *             application/json:
 *                schema:
 *                   type: object
 *                   properties:
 *                       id_ticket:
 *                           type: integer
 *                           required: true
 *                           example: 1
 *                       type_ticket:
 *                           type: string
 *                           required: true
 *                           example: "VIP"
 *                       id_price:
 *                           type: integer
 *                           required: true
 *                           example: 1
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
 * /ticket/{id}:
 *   put:
 *      security:
 *          - bearerAuth: []
 *      description: Update one ticket
 *      tags:
 *          - Ticket_routes
 *      parameters:
 *          - in: path
 *            name: id
 *            schema:
 *              type: string
 *            required: true
 *            description: Ticket id
 *      requestBody:
 *          content:
 *             application/json:
 *                schema:
 *                   type: object
 *                   properties:
 *                       id_ticket:
 *                           type: integer
 *                           required: true
 *                           example: 1
 *                       type_ticket:
 *                           type: string
 *                           required: true
 *                           example: "VIP"
 *                       id_price:
 *                           type: integer
 *                           required: true
 *                           example: 1
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
 * /ticket/{id}:
 *   delete:
 *      security:
 *          - bearerAuth: []
 *      description: Delete one ticket
 *      tags:
 *          - Ticket_routes
 *      parameters:
 *          - in: path
 *            name: id
 *            schema:
 *              type: string
 *            required: true
 *            description: Ticket id
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
 * /ticket:
 *   delete:
 *      security:
 *          - bearerAuth: []
 *      description: Delete all ticket
 *      tags:
 *          - Ticket_routes
 *      responses:
 *          '200':
 *              description: Resource added successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */

export default router;
