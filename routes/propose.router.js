import express from 'express';
import { findAll, findOne, create, remove, removeAll } from '../controllers/propose.controller.js';

const router = express.Router();

router.get('/', findAll);
/**
 * @swagger
 * /propose:
 *   get:
 *      description: Return all propose
 *      tags:
 *          - propose_routes
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
 * /propose/one:
 *   get:
 *      description: Return propose by id_propose
 *      tags:
 *          - propose_routes
 *      parameters:
 *          - in: query
 *            name: id_prestataire
 *            type: integer
 *            required: true
 *          - in: query
 *            name: id_service
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
 * /propose:
 *   post:
 *      description: Create an propose
 *      tags:
 *          - propose_routes
 *      requestBody:
 *          content:
 *             application/json:
 *                schema:
 *                    type: object
 *                    properties:
 *                        id_prestataire:
 *                           type: integer
 *                        id_service:
 *                           type: integer
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
 * /propose/one:
 *   delete:
 *      description: Delete propose by id_propose
 *      tags:
 *          - propose_routes
 *      parameters:
 *          - in: query
 *            name: id_prestataire
 *            type: integer
 *            required: true
 *          - in: query
 *            name: id_service
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
 * /propose:
 *   delete:
 *      description: Delete all propose
 *      tags:
 *          - propose_routes
 *      responses:
 *          '200':
 *              description: Resource added successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */

export default router;
