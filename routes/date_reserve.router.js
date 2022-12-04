import express from 'express';
import { findAll, findOne, create, remove, removeAll } from '../controllers/date_reserve.controller.js';

const router = express.Router();

router.get('/', findAll);
/**
 * @swagger
 * /datereserve:
 *   get:
 *      description: Return all datereserve
 *      tags:
 *          - datereserve_routes
 *      responses:
 *          '200':
 *              description: Resource added successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
*/

router.get('/reservation', findOne);
/**
 * @swagger
 * /datereserve/reservation:
 *   get:
 *      description: Return datereserve by date_start_placereserved and date_end_placereserved
 *      tags:
 *          - datereserve_routes
 *      parameters:
 *          - in: path
 *            name: date_start_placereserved
 *            type: string
 *            required: true
 *          - in: query
 *            name: date_end_placereserved
 *            type: string
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
 * /datereserve:
 *   post:
 *      description: Create an datereserve
 *      tags:
 *          - datereserve_routes
 *      parameters:
 *          - in: body
 *            name: datereserve
 *            description: The datereserve to create.
 *            schema:
 *               type: object
 *               required:
 *                   - date_start_placereserved
 *                   - date_end_placereserved
 *               properties:
 *                   date_start_placereserved:
 *                       type: string
 *                   date_end_placereserved:
 *                       type: string
 *      responses:
 *          '200':
 *              description: Resource added successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
*/

router.delete('/reservation', remove);
/**
 * @swagger
 * /datereserve/reservation:
 *   delete:
 *      description: Delete datereserve by date_start_placereserved and date_end_placereserved
 *      tags:
 *          - datereserve_routes
 *      parameters:
 *          - in: path
 *            name: date_start_placereserved
 *            type: string
 *            required: true
 *          - in: query
 *            name: date_end_placereserved
 *            type: string
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
 * /datereserve:
 *   delete:
 *      description: Delete all datereserve
 *      tags:
 *          - datereserve_routes
 *      responses:
 *          '200':
 *              description: Resource added successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
*/

export default router;