import express from 'express';
import { findAll, findOne, create, update, remove, removeAll } from '../controllers/qr_code.controller.js';

const router = express.Router();

router.get('/', findAll);
/**
 * @swagger
 * /qrcode:
 *   get:
 *      security:
 *          - bearerAuth: []
 *      description: Return all qrcode
 *      tags:
 *          - qr_code_routes
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
 * /qrcode/{id}:
 *   get:
 *      security:
 *          - bearerAuth: []
 *      description: Return one qrcode
 *      tags:
 *          - qr_code_routes
 *      parameters:
 *          - in: path
 *            name: id
 *            schema:
 *              type: string
 *            required: true
 *            description: The id of the qrcode
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
 * /qrcode:
 *   post:
 *      security:
 *          - bearerAuth: []
 *      description: Create a new qrcode
 *      tags:
 *          - qr_code_routes
 *      requestBody:
 *          content:
 *            application/json:
 *               schema:
 *                   type: object
 *                   properties:
 *                       qr_code:
 *                          type: string
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
 * /qrcode/{id}:
 *   put:
 *      security:
 *          - bearerAuth: []
 *      description: Update a qrcode
 *      tags:
 *          - qr_code_routes
 *      parameters:
 *          - in: path
 *            name: id
 *            schema:
 *              type: string
 *            required: true
 *            description: The id of the qrcode
 *      requestBody:
 *          content:
 *            application/json:
 *               schema:
 *                   type: object
 *                   properties:
 *                       qr_code:
 *                          type: string
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
 * /qrcode/{id}:
 *   delete:
 *      security:
 *          - bearerAuth: []
 *      description: Delete a qrcode
 *      tags:
 *          - qr_code_routes
 *      parameters:
 *          - in: path
 *            name: id
 *            schema:
 *              type: string
 *            required: true
 *            description: The id of the qrcode
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
 * /qrcode:
 *   delete:
 *      description: Delete all qrcode
 *      tags:
 *          - qr_code_routes
 *      responses:
 *          '200':
 *              description: Resource added successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
*/

export default router;
