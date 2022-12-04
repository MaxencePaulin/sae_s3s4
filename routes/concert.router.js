import express from 'express';
import { findAll, findOne, create, remove, removeAll } from '../controllers/concert.controller.js';

const router = express.Router();

router.get('/', findAll);
/**
 * @swagger
 * /concert:
 *   get:
 *      description: Return all concert
 *      tags:
 *          - Concert_routes
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
 * /concert/one:
 *   get:
 *      description: Return artist by id_artiste
 *      tags:
 *          - Concert_routes
 *      parameters:
 *          - in: query
 *            name: id_artist
 *            type: integer
 *            required: true
 *          - in: query
 *            name: id_scene
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
 * /concert:
 *   post:
 *      description: Create an artist
 *      tags:
 *          - Concert_routes
 *      parameters:
 *          - in: body
 *            name: concert
 *            description: The concert to create.
 *            schema:
 *               type: object
 *               required:
 *                   - id_artist
 *                   - id_scene
 *                   - date_concert
 *               properties:
 *                   id_artist:
 *                       type: integer
 *                   id_scene:
 *                       type: integer
 *                   date_concert:
 *                       type: string
 *                       format: date
 *      responses:
 *          '200':
 *              description: Resource added successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */

router.delete('/', remove);
/**
 * @swagger
 * /concert:
 *   delete:
 *      description: Delete an artist
 *      tags:
 *          - Concert_routes
 *      parameters:
 *          - in: query
 *            name: id_artist
 *            type: integer
 *            required: true
 *          - in: query
 *            name: id_scene
 *            type: integer
 *            required: true
 *          - in: query
 *            name: date_concert
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

router.delete('/all', removeAll);
/**
 * @swagger
 * /concert/all:
 *   delete:
 *      description: Delete all artist
 *      tags:
 *          - Concert_routes
 *      responses:
 *          '200':
 *              description: Resource added successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */

export default router;