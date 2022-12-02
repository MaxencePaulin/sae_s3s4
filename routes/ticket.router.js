import express from 'express';
import { findAll, findOne, create, update, remove, removeAll } from '../controllers/ticket.controller.js';

const router = express.Router();

router.get('/', findAll);
/**
 * @swagger
 * /ticket:
 *   get:
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
 *      description: Create one ticket
 *      tags:
 *          - Ticket_routes
 *      parameters:
 *          - in: body
 *            name: ticket
 *            schema:
 *              type: object
 *              required:
 *                  - id_ticket
 *                  - type_ticket
 *                  - id_price
 *              properties:
 *                  id_ticket:
 *                      type: integer
 *                  type_ticket:
 *                      type: string
 *                  id_price:
 *                      type: integer
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
router.put('/:id', update);
/**
 * @swagger
 * /ticket/{id}:
 *   put:
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
 *          - in: body
 *            name: ticket
 *            schema:
 *              type: object
 *              required:
 *                  - id_ticket
 *                  - type_ticket
 *                  - id_price
 *              properties:
 *                  id_ticket:
 *                      type: integer
 *                  type_ticket:
 *                      type: string
 *                  id_price:
 *                      type: integer
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
router.delete('/:id', remove);
/**
 * @swagger
 * /ticket/{id}:
 *   delete:
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
