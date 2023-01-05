import express from 'express';
import { findAll, findOne, create, update, remove, removeAll } from '../controllers/service.controller.js';

const router = express.Router();

router.get('/', findAll);
/**
 * @swagger
 * /service:
 *   get:
 *      description: Return all service
 *      tags:
 *          - service routes
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
 * /service/{id}:
 *   get:
 *      description: Return service by id
 *      tags:
 *          - service routes
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
 * /service:
 *   post:
 *      security:
 *          - bearerAuth: []
 *      description: Create a service
 *      tags:
 *          - service routes
 *      requestBody:
 *          content:
 *             application/json:
 *                schema:
 *                   type: object
 *                   properties:
 *                       libelle_service:
 *                           type: string
 *                           required: true
 *                           example: "restauration"
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
 * /service/{id}:
 *   put:
 *      security:
 *          - bearerAuth: []
 *      description: Update a service
 *      tags:
 *          - service routes
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
 *                   type: object
 *                   properties:
 *                       libelle_service:
 *                           type: string
 *                           required: true
 *                           example: "restauration"
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
 * /service/{id}:
 *   delete:
 *      security:
 *          - bearerAuth: []
 *      description: Delete a service
 *      tags:
 *          - service routes
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
 * /service:
 *   delete:
 *      security:
 *          - bearerAuth: []
 *      description: Delete all service
 *      tags:
 *          - service routes
 *      responses:
 *          '200':
 *              description: Resource added successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
*/

export default router;

