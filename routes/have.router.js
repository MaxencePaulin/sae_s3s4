import express from 'express';
import {findAll, findOne, create, remove, removeAll, updateSocialNetwork} from '../controllers/have.controller.js';

const router = express.Router();

router.get('/', findAll);
/**
 * @swagger
 * /have:
 *   get:
 *      security:
 *          - bearerAuth: []
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
 *            schema:
 *              type: integer
 *            required: true
 *          - in: query
 *            name: id_socialnetwork
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
 * /have:
 *   post:
 *      security:
 *          - bearerAuth: []
 *      description: Create an artist
 *      tags:
 *          - Have_routes
 *      requestBody:
 *          content:
 *             application/json:
 *                schema:
 *                   type: object
 *                   properties:
 *                       id_artist:
 *                           type: integer
 *                       id_socialnetwork:
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
 * /have/one:
 *   delete:
 *      security:
 *          - bearerAuth: []
 *      description: Delete an artist
 *      tags:
 *          - Have_routes
 *      parameters:
 *          - in: query
 *            name: id_artist
 *            schema:
 *              type: integer
 *            required: true
 *          - in: query
 *            name: id_socialnetwork
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
 * /have:
 *   delete:
 *      security:
 *          - bearerAuth: []
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

router.put('/socialnetwork_by_id_artist', updateSocialNetwork);
/**
 * @swagger
 * /have/socialnetwork_by_id_artist:
 *   put:
 *      security:
 *          - bearerAuth: []
 *      description: Update a SocialNetwork of one artist
 *      tags:
 *          - Have_routes
 *      parameters:
 *          - in: query
 *            name: id_artist
 *            schema:
 *              type: integer
 *            required: true
 *          - in: query
 *            name: old_libelle_socialnetwork
 *            schema:
 *              type: string
 *            required: true
 *      requestBody:
 *          content:
 *             application/json:
 *                schema:
 *                   type: object
 *                   properties:
 *                       libelle_socialnetwork:
 *                           type: string
 *                           minLength: 1
 *                           maxLength: 50
 *                           example: Instagram
 *                           required: true
 *                       page_socialnetwork:
 *                           type: string
 *                           minLength: 1
 *                           maxLength: 255
 *                           example: https://www.instagram.com/toto/
 *                           required: true
 *      responses:
 *          '200':
 *              description: Resource added successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */

export default router;
