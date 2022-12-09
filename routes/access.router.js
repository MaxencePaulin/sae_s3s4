import express from 'express';
import { findAll, findOne, create, remove, removeAll } from '../controllers/access.controller.js';

const router = express.Router();

router.get('/', findAll);
/**
 * @swagger
 * /access:
 *   get:
 *      security:
 *          - bearerAuth: []
 *      description: Return all access
 *      tags:
 *          - access_routes
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
 * /access/{id}:
 *   get:
 *      description: Return access by id role and id droit 
 *      tags:
 *          - access_routes
 *      parameters:
 *          - in: query
 *            name: id_role
 *            schema:
 *              type: integer
 *            required: true
 *          - in: query
 *            name: id_droit
 *            schema:
 *              type: integer
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
 * /access:
 *   post:
 *      description: Create an access
 *      tags:
 *          - access_routes
 *      requestBody:
 *          content:
 *             application/json:
 *                schema:
 *                    type: object
 *                    properties:
 *                        id_role:
 *                          type: integer
 *                          example: 1
 *                        id_droit:
 *                          type: integer
 *                          example: 3
 *      responses:
 *          '200':
 *              description: Resource added successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */

router.delete('/one', remove);
/**
 * @swagger
 * /access/{id}:
 *   delete:
 *      description: Delete an access
 *      tags:
 *          - access_routes
 *      parameters:
 *          - in: query
 *            name: id_role
 *            schema:
 *              type: integer
 *            required: true
 *          - in: query
 *            name: id_droit
 *            schema:
 *              type: integer
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
 * /access:
 *   delete:
 *      description: Delete all access
 *      tags:
 *          - access_routes
 *      responses:
 *          '200':
 *              description: Resource added successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */


export default router;