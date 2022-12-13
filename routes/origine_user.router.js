import express from 'express';
import { findAll, findOne, create, remove, removeAll } from '../controllers/origine_user.controller.js';

const router = express.Router();

router.get('/', findAll);
/**
 * @swagger
 * /origineuser:
 *   get:
 *      description: Return all origineuser
 *      tags:
 *          - origineuser_routes
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
 * /origineuser/one:
 *   get:
 *      description: Return user by id_user
 *      tags:
 *          - origineuser_routes
 *      parameters:
 *          - in: query
 *            name: id_user
 *            type: integer
 *            required: true
 *          - in: query
 *            name: id_nationality
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
 * /origineuser:
 *   post:
 *      description: Create an user
 *      tags:
 *          - origineuser_routes
 *      requestBody:
 *          content:
 *             application/json:
 *                schema:
 *                    type: object
 *                    properties:
 *                        id_user:
 *                          type: integer
 *                        id_nationality:
 *                          type: integer
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
 * /origineuser/one:
 *   delete:
 *      description: Delete an user
 *      tags:
 *          - origineuser_routes
 *      parameters:
 *          - in: query
 *            name: id_user
 *            type: integer
 *            required: true
 *          - in: query
 *            name: id_nationality
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
 * /origineuser:
 *   delete:
 *      description: Delete all origineuser
 *      tags:
 *          - origineuser_routes
 *      responses:
 *          '200':
 *              description: Resource added successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */

export default router;
