import express from 'express';
import { findAll, findOne, create, remove, removeAll , findByStyle } from '../controllers/concert.controller.js';

const router = express.Router();

router.get('/', findAll);
/**
 * @swagger
 * /concert:
 *   get:
 *      security:
 *          - bearerAuth: []
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
 *      requestBody:
 *          content:
 *             application/json:
 *                schema:
 *                    type: object
 *                    properties:
 *                        id_artist:
 *                            type: integer
 *                        id_scene:
 *                            type: integer
 *                        date_concert:
 *                            type: string
 *                            format: date
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
 * /concert/one:
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

router.delete('/', removeAll);
/**
 * @swagger
 * /concert:
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


router.get('/findByStyle/:id', findByStyle);
/**
 * @swagger
 * /concert/findByStyle/{id}:
 *   get:
 *      description: Display scenes By a Style
 *      tags:
 *          - Concert_routes
 *      parameters:
 *          - in: path
 *            name: id
 *            description: the id of the music style to search 
 *            required: true
 *            type: integer
*      responses:
 *          '200':
 *              description: Resource updated successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */

export default router;