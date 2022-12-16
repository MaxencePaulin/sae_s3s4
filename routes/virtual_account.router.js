import express from 'express';
import { findAll, findOne, create, update, remove, removeAll } from '../controllers/virtual_account.controller.js';

const router = express.Router();

router.get('/', findAll);
/**
 * @swagger
 * /virtualaccount:
 *   get:
 *      security:
 *          - bearerAuth: []
 *      description: Return all virtualaccount
 *      tags:
 *          - virtual_account routes
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
 * /virtualaccount/{id}:
 *   get:
 *      security:
 *          - bearerAuth: []
 *      description: Return virtualaccount by id
 *      tags:
 *          - virtual_account routes
 *      parameters:
 *          - in: path
 *            name: id
 *            type: integer
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
 * /virtualaccount:
 *   post:
 *      security:
 *          - bearerAuth: []
 *      description: Create a virtual_account
 *      tags:
 *          - virtual_account routes
 *      requestBody:
 *          content:
 *            application/json:
 *               schema:
 *                   type: object
 *                   properties:
 *                       amount:
 *                          type: integer
 *                          required: true
 *                          example: 100
 *                       id_qr_code:
 *                          type: string
 *                          required: true
 *                          example: 1
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
 * /virtualaccount/{id}:
 *   put:
 *      security:
 *          - bearerAuth: []
 *      description: Update a virtual_account
 *      tags:
 *          - virtual_account routes
 *      parameters:
 *          - in: path
 *            name: id
 *            type: integer
 *            required: true
 *      requestBody:
 *          content:
 *            application/json:
 *               schema:
 *                   type: object
 *                   properties:
 *                       amount:
 *                          type: integer
 *                          required: true
 *                          example: 100
 *                       id_qr_code:
 *                          type: string
 *                          required: true
 *                          example: 1
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
 * /virtualaccount/{id}:
 *   delete:
 *      security:
 *          - bearerAuth: []
 *      description: Delete a virtual_account
 *      tags:
 *          - virtual_account routes
 *      parameters:
 *          - in: path
 *            name: id
 *            type: integer
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
 * /virtualaccount:
 *   delete:
 *      security:
 *          - bearerAuth: []
 *      description: Delete all virtual_account
 *      tags:
 *          - virtual_account routes
 *      responses:
 *          '200':
 *              description: Resource added successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */

export default router;
