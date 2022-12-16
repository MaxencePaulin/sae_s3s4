import express from 'express';
import { findAll, findOne, create, update, remove, removeAll } from '../controllers/social_network.controller.js';

const router = express.Router();

router.get('/', findAll);
/**
 * @swagger
 * /socialnetwork:
 *   get:
 *      description: Return all socialnetwork
 *      tags:
 *          - socialnetwork routes
 *      responses:
 *          '200':
 *              description: Resource added successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */

router.get('/:id', findOne);
/**
 * @swagger
 * /socialnetwork/{id}:
 *   get:
 *      description: Return socialnetwork by id
 *      tags:
 *          - socialnetwork routes
 *      parameters:
 *          - in: path
 *            name: id
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
 * /socialnetwork:
 *   post:
 *      security:
 *          - bearerAuth: []
 *      description: Create a socialnetwork
 *      tags:
 *          - socialnetwork routes
 *      requestBody:
 *          content:
 *             application/json:
 *                schema:
 *                   type: object
 *                   properties:
 *                       libelle_socialnetwork:
 *                           type: string
 *                           required: true
 *                           example: "Facebook"
 *                       page_socialnetwork:
 *                           type: string
 *                           required: true
 *                           example: "https://www.facebook.com"
 *      responses:
 *          '200':
 *              description: Resource added successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */

router.put('/:id', update);
/**
 * @swagger
 * /socialnetwork/{id}:
 *   put:
 *      security:
 *          - bearerAuth: []
 *      description: Update a socialnetwork
 *      tags:
 *          - socialnetwork routes
 *      parameters:
 *          - in: path
 *            name: id
 *            type: integer
 *            required: true
 *      requestBody:
 *          content:
 *             application/json:
 *                schema:
 *                   type: object
 *                   properties:
 *                       libelle_socialnetwork:
 *                           type: string
 *                           required: true
 *                           example: "Facebook"
 *                       page_socialnetwork:
 *                           type: string
 *                           required: true
 *                           example: "https://www.facebook.com"
 *      responses:
 *          '200':
 *              description: Resource added successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */

router.delete('/:id', remove);
/**
 * @swagger
 * /socialnetwork/{id}:
 *   delete:
 *      security:
 *          - bearerAuth: []
 *      description: Delete a socialnetwork
 *      tags:
 *          - socialnetwork routes
 *      parameters:
 *          - in: path
 *            name: id
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
 * /socialnetwork:
 *   delete:
 *      security:
 *          - bearerAuth: []
 *      description: Delete all socialnetwork
 *      tags:
 *          - socialnetwork routes
 *      responses:
 *          '200':
 *              description: Resource added successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
*/

export default router;
