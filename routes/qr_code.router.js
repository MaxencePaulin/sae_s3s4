import express from 'express';
import { findAll, findOne, create, update, remove, removeAll } from '../controllers/qr_code.controller.js';

const router = express.Router();

router.get('/', findAll);
/**
 * @swagger
 * /qr_code:
 *   get:
 *      description: Return all qr_code
 *      tags:
 *          - Qr_code_routes
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
 * /qr_code/{id}:
 *   get:
 *      description: Return one qr_code
 *      tags:
 *          - Qr_code_routes
 *      parameters:
 *          - in: path
 *            name: id
 *            schema:
 *              type: string
 *            required: true
 *            description: The id of the qr_code
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
 * /qr_code:
 *   post:
 *      description: Create a new qr_code
 *      tags:
 *          - Qr_code_routes
 *      parameters:
 *          - in: body
 *            name: qr_code
 *            description: The qr_code to create.
 *            schema:
 *              type: object
 *              required:
 *                  - id_qr_code
 *                  - qr_code
 *              properties:
 *                  id:
 *                      type: int
 *                  qr_code:
 *                      type: string
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
 * /qr_code/{id}:
 *   put:
 *      description: Update a qr_code
 *      tags:
 *          - Qr_code_routes
 *      parameters:
 *          - in: path
 *            name: id
 *            schema:
 *              type: string
 *            required: true
 *            description: The id of the qr_code
 *          - in: body
 *            name: qr_code
 *            description: The qr_code to create.
 *            schema:
 *              type: object
 *              required:
 *                  - id_qr_code
 *                  - qr_code
 *              properties:
 *                  id:
 *                      type: int
 *                  qr_code:
 *                      type: string
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
 * /qr_code/{id}:
 *   delete:
 *      description: Delete a qr_code
 *      tags:
 *          - Qr_code_routes
 *      parameters:
 *          - in: path
 *            name: id
 *            schema:
 *              type: string
 *            required: true
 *            description: The id of the qr_code
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
 * /qr_code:
 *   delete:
 *      description: Delete all qr_code
 *      tags:
 *          - Qr_code_routes
 *      responses:
 *          '200':
 *              description: Resource added successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
*/

export default router;
