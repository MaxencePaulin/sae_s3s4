import express from 'express';
import { findAll, findOne, create, update, remove, removeAll } from '../controllers/artist.controller.js';

const router = express.Router();

router.get('/', findAll);
/**
 * @swagger
 * /artist:
 *   get:
 *      description: Return all artist
 *      tags:
 *          - Artist_route
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
 * /artist/{id}:
 *   get:
 *      description: Return artist by id_artiste
 *      tags:
 *          - Artist_route
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
 * /artist:
 *   post:
 *      description: Create an artist
 *      tags:
 *          - Artist_route
 *      parameters:
 *          - in: body
 *            name: artist
 *            description: The artist to create.
 *            schema:
 *               type: object
 *               required:
 *                   - id_artist
 *                   - name
 *                   - image
 *                   - biography
 *                   - genre
 *               properties:
 *                   id_artist:
 *                      type: integer
 *                   name:
 *                      type: string
 *                   image:
 *                      type: string
 *                   biography:
 *                      type: string
 *                   genre:
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
 * /artist/{id}:
 *   put:
 *      description: Update an artist
 *      tags:
 *          - Artist_route
 *      parameters:
 *          - in: path
 *            name: id
 *            type: integer
 *            required: true
 *          - in: body
 *            name: artist
 *            description: The artist to update.
 *            schema:
 *               type: object
 *               required:
 *                   - id_artist
 *                   - name
 *                   - image
 *                   - biography
 *                   - genre
 *               properties:
 *                   id_artist:
 *                      type: integer
 *                   name:
 *                      type: string
 *                   image:
 *                      type: string
 *                   biography:
 *                      type: string
 *                   genre:
 *                      type: string
 *      responses:
 *          '200':
 *              description: Resource updated successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */

router.delete('/:id', remove);
/**
 * @swagger
 * /artist/{id}:
 *   delete:
 *      description: Delete an artist
 *      tags:
 *          - Artist_route
 *      parameters:
 *          - in: path
 *            name: id
 *            type: integer
 *            required: true
 *      responses:
 *          '200':
 *              description: Resource deleted successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */

router.delete('/', removeAll);
/**
 * @swagger
 * /artist:
 *   delete:
 *      description: Delete all artist
 *      tags:
 *          - Artist_route
 *      responses:
 *          '200':
 *              description: Resource deleted successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */

export default router;