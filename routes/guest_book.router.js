import express from 'express';
import { findAll, findOne, create, update, remove, removeAll,
    findByArtOrPrest } from '../controllers/guest_book.controller.js';

const router = express.Router();

router.get('/', findAll);
/**
 * @swagger
 * /guest_book:
 *   get:
 *      security:
 *          - bearerAuth: []
 *      description: Return all elements in Guest_book connected
 *      tags:
 *          - Guest_book routes
 *      responses:
 *          '200':
 *              description: Resource added successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */

router.get('/one', findByArtOrPrest);
/**
 * @swagger
 * /guest_book/one:
 *   get:
 *      description: Return comment by artist or prestataire
 *      tags:
 *          - Guest_book routes
 *      parameters:
 *          - in: query
 *            name: id_artist
 *            schema:
 *              type: integer
 *            required: false
 *          - in: query
 *            name: id_prestataire
 *            schema:
 *              type: integer
 *            required: false
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
 * /guest_book/{id}:
 *   get:
 *      description: Return comment by id
 *      tags:
 *          - Guest_book routes
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
 * /guest_book:
 *   post:
 *      security:
 *          - bearerAuth: []
 *      description: Create an comment
 *      tags:
 *          - Guest_book routes
 *      requestBody:
 *          content:
 *             application/json:
 *                schema:
 *                    type: object
 *                    properties:
 *                        libelle_avis:
 *                          type: text
 *                          minLength: 1
 *                          maxLength: 50
 *                          example: "super festival"
 *                          required: true
 *                        id_artiste:
 *                          type: integer
 *                          example: 2
 *                          required: false
 *                        id_prestataire:
 *                          type: integer
 *                          example: 1
 *                          required: false
 *                        id_user:
 *                          type: integer
 *                          example: 3
 *                          required: false
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
 * /guest_book/{id}:
 *   put:
 *      security:
 *          - bearerAuth: []
 *      description: update an comment
 *      tags:
 *          - Guest_book routes
 *      parameters:
 *          - in: path
 *            name: id
 *            schema:
 *              type: integer
 *            required: true
 *      requestBody:
 *          content:
 *             application/json:
 *                schema:
 *                    type: object
 *                    properties:
 *                        libelle_avis:
 *                          type: text
 *                          minLength: 1
 *                          maxLength: 50
 *                          example: "super festival"
 *                          required: true
 *                        id_artiste:
 *                          type: integer
 *                          example: 2
 *                          required: false
 *                        id_prestataire:
 *                          type: integer
 *                          example: 1
 *                          required: false
 *                        id_user:
 *                          type: integer
 *                          example: 3
 *                          required: false
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
 * /guest_book/{id}:
 *   delete:
 *      security:
 *          - bearerAuth: []
 *      description: Delete a comment
 *      tags:
 *          - Guest_book routes
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
 * /guest_book:
 *   delete:
 *      security:
 *          - bearerAuth: []
 *      description: Delete all comments
 *      tags:
 *          - Guest_book routes
 *      responses:
 *          '200':
 *              description: Resource added successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */

export default router;
