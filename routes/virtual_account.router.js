import express from 'express';
import { findAll, findOne, create, update, remove, removeAll } from '../controllers/virtual_account.controller.js';

const router = express.Router();

router.get('/', findAll);
/**
 * @swagger
 * /virtualaccount:
 *   get:
 *      description: Return all virtualaccount
 *      tags:
 *          - virtualaccount routes
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
 *      description: Return virtualaccount by id
 *      tags:
 *          - virtualaccount routes
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
 * /virtual_account:
 *   post:
 *      description: Create a virtual_account
 *      tags:
 *          - virtual_account routes
 *      parameters:
 *          - in: body
 *            name: virtual_account
 *            description: The virtual_account to create.
 *            schema:
 *              type: object
 *              required:
 *                  - amount
 *                  - id_qr_code
 *              properties:
 *                  amount:
 *                      type: integer
 *                  id_qr_code:
 *                      type: integer
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
 * /virtual_account/{id}:
 *   put:
 *      description: Update a virtual_account
 *      tags:
 *          - virtual_account routes
 *      parameters:
 *          - in: path
 *            name: id
 *            type: integer
 *            required: true
 *          - in: body
 *            name: virtual_account
 *            description: The virtual_account to update.
 *            schema:
 *              type: object
 *              required:
 *                  - amount
 *                  - id_qr_code
 *              properties:
 *                  amount:
 *                      type: integer
 *                  id_qr_code:
 *                      type: integer
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
 * /virtual_account/{id}:
 *   delete:
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
 * /virtual_account:
 *   delete:
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
