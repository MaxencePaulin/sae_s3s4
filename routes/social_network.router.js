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
 *      description: Create a socialnetwork
 *      tags:
 *          - socialnetwork routes
 *      parameters:
 *          - in: body
 *            name: socialnetwork
 *            description: The socialnetwork to create.
 *            schema:
 *              type: object
 *              required:
 *                  - libelle_socialnetwork
 *                  - page_socialnetwork
 *              properties:
 *                  libelle_socialnetwork:
 *                      type: string
 *                  page_socialnetwork:
 *                      type: string
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
 *      description: Update a socialnetwork
 *      tags:
 *          - socialnetwork routes
 *      parameters:
 *          - in: path
 *            name: id
 *            type: integer
 *            required: true
 *          - in: body
 *            name: socialnetwork
 *            description: The socialnetwork to update.
 *            schema:
 *              type: object
 *              required:
 *                  - libelle_socialnetwork
 *                  - page_socialnetwork
 *              properties:
 *                  libelle_socialnetwork:
 *                      type: string
 *                  page_socialnetwork:
 *                      type: string
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
 *      description: Delete a socialnetwork
 *      tags:
 *          - socialnetwork routes
 *      parameters:
 *          - in: path
 *            name: id
 *            type: integer
 *            required: true
 *      responses:
 *          '200
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
