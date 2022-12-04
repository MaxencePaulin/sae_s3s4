import express from 'express';
import { findAll, findOne, create, remove, removeAll } from '../controllers/have.controller.js';

const router = express.Router();

router.get('/', findAll);
/**
 * @swagger
 * /have:
 *   get:
 *      description: Return all have
 *      tags:
 *          - Have_routes
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
 * /have/one:
 *   get:
 *      description: Return artist by id_artiste
 *      tags:
 *          - Have_routes
 *      parameters:
 *          - in: query
 *            name: id_artist
 *            type: integer
 *            required: true
 *          - in: query
 *            name: id_socialnetwork
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
 * /have:
 *   post:
 *      description: Create an artist
 *      tags:
 *          - Have_routes
 *      parameters:
 *          - in: body
 *            name: have
 *            description: The have to create.
 *            schema:
 *               type: object
 *               required:
 *                   - id_artist
 *                   - id_socialnetwork
 *               properties:
 *                   id_artist:
 *                       type: integer
 *                   id_socialnetwork:
 *                       type: integer
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
 * /have:
 *   delete:
 *      description: Delete an artist
 *      tags:
 *          - Have_routes
 *      parameters:
 *          - in: query
 *            name: id_artist
 *            type: integer
 *            required: true
 *          - in: query
 *            name: id_socialnetwork
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

router.delete('/all', removeAll);
/**
 * @swagger
 * /have/all:
 *   delete:
 *      description: Delete all artist
 *      tags:
 *          - Have_routes
 *      responses:
 *          '200':
 *              description: Resource added successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
*/

export default router;
