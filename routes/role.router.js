import express from 'express';
import { findAll, findOne, create, update, remove, removeAll } from '../controllers/role.controller.js';

const router = express.Router();

router.get('/', findAll);
/**
 * @swagger
 * /role:
 *   get:
 *      description: Return all role
 *      tags:
 *          - Role routes
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
 * /role/{id}:
 *   get:
 *      description: Return role by id
 *      tags:
 *          - Role routes
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
 * /role:
 *   post:
 *      description: Create a role
 *      tags:
 *          - Role routes
 *      requestBody:
 *          content:
 *             application/json:
 *                schema:
 *                    type: object
 *                    properties:
 *                        libelle_role:
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
 * /role/{id}:
 *   put:
 *      description: Update a role
 *      tags:
 *          - Role routes
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
 *                    type: object
 *                    properties:
 *                        libelle_role:
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
 * /role/{id}:
 *   delete:
 *      description: Delete a role
 *      tags:
 *          - Role routes
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
 * /role:
 *   delete:
 *      description: Delete all role
 *      tags:
 *          - Role routes
 *      responses:
 *          '200':
 *              description: Resource added successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
*/

export default router;
