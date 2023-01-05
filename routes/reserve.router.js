import express from 'express';
import { findAll, findOne, create, remove, removeAll } from '../controllers/reserve.controller.js';

const router = express.Router();

router.get('/', findAll);
/**
 * @swagger
 * /reserve:
 *   get:
 *      description: Return all reservations
 *      tags:
 *          - Reserve routes
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
 * /reserve/one:
 *   get:
 *      description: Return one reservation
 *      tags:
 *          - Reserve routes
 *      parameters:
 *          - in: query
 *            name: id_user
 *            schema: 
 *                type: integer
 *            required: true
 *          - in: query
 *            name: id_place
 *            schema: 
 *                type: integer
 *            required: true
 *          - in: query
 *            name: date_start_placereserved
 *            schema: 
 *                type: integer
 *            required: true
 *          - in: query
 *            name: date_end_placereserved
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
 * /reserve:
 *   post:
 *      security:
 *          - bearerAuth: []
 *      description: Create a new reservation
 *      tags:
 *          - Reserve routes
 *      requestBody:
 *          content:
 *             application/json:
 *                 schema:
 *                     type: object
 *                     properties:
 *                         id_user:
 *                           type: integer
 *                           example: 1
 *                           required: true
 *                         id_place:
 *                           type: integer
 *                           example: 1
 *                           required: true
 *                         date_start_placereserved:
 *                           type: string
 *                           example: 2020-01-01
 *                           required: true
 *                         date_end_placereserved:
 *                           type: string
 *                           example: 2020-12-31
 *                           required: true
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
 * /reserve/one:
 *   delete:
 *      security:
 *          - bearerAuth: []
 *      description: Delete one reservation
 *      tags:
 *          - Reserve routes
 *      parameters:
 *          - in: query
 *            name: id_user
 *            schema: 
 *                type: integer
 *            required: true
 *          - in: query
 *            name: id_place
 *            schema: 
 *                type: integer
 *            required: true
 *          - in: query
 *            name: date_start_placereserved
 *            schema: 
 *                type: integer
 *            required: true
 *          - in: query
 *            name: date_end_placereserved
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
 * /reserve:
 *   delete:
 *      security:
 *          - bearerAuth: []
 *      description: Delete all make
 *      tags:
 *          - Reserve routes
 *      responses:
 *          '200':
 *              description: Resource added successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */

export default router;
