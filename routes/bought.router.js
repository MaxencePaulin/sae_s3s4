import express from 'express';
import { findAll, findOne, create, remove, removeAll } from '../controllers/bought.controller.js';

const router = express.Router();

router.get('/', findAll);
/**
 * @swagger
 * /bought:
 *   get:
 *      description: Return all bought
 *      tags:
 *          - Bought_routes
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
 * /bought/one:
 *   get:
 *      description: Return user by id
 *      tags:
 *          - Access_routes
 *      parameters:
 *          - in: query
 *            name: id_user
 *            type: integer
 *            required: true
 *          - in: query
 *            name: id_ticket
 *            type: integer
 *            required: true
 *          - in: query
 *             name: date_start_validity
 *             type: string
 *             required: true
 *          - in: query
 *             name: date_end_validity
 *             type: string
 *             required: true
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
 * /bought:
 *   post:
 *      description: Create an access
 *      tags:
 *          - Bought_routes
 *      parameters:
 *          - in: body
 *            name: user
 *            description: The bought to create.
 *            schema:
 *              type: object
 *              required:
 *                  - id_user
 *                  - id_ticket
 *                  - date_start_validity
 *                  - date_end_validity
 *              properties:
 *                  id_user:
 *                      type: integer
 *                  id_ticket:
 *                      type: integer
 *                  date_start_validity:
 *                      type: string
 *                  date_end_validity:
 *                      type: string
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
 * /bought/one:
 *   delete:
 *      description: Delete an access
 *      tags:
 *          - Bought_routes
 *      parameters:
 *          - in: query
 *            name: id_user
 *            type: integer
 *            required: true
 *          - in: query
 *            name: id_ticket
 *            type: integer
 *            required: true
 *          - in: query
 *             name: date_start_validity
 *             type: string
 *             required: true
 *          - in: query
 *             name: date_end_validity
 *             type: string
 *             required: true
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
 * /bought:
 *   delete:
 *      description: Delete all bought
 *      tags:
 *          - Bought_routes
 *      responses:
 *          '200':
 *              description: Resource added successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
*/

export default router;