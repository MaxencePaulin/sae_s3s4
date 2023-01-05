import express from 'express';
import { findAll, findOne, create, update, remove, removeAll } from '../controllers/type_prestataire.controller.js';

const router = express.Router();

router.get('/', findAll);
/**
 * @swagger
 * /typeprestataire:
 *   get:
 *      description: Return all typeprestataire
 *      tags:
 *          - typeprestataire routes
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
 * /typeprestataire/{id}:
 *   get:
 *      description: Return typeprestataire by id
 *      tags:
 *          - typeprestataire routes
 *      parameters:
 *          - in: path
 *            name: id
 *            schema: 
 *                type: integer
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
 * /typeprestataire:
 *   post:
 *      security:
 *          - bearerAuth: []
 *      description: Create a typeprestataire
 *      tags:
 *          - typeprestataire routes
 *      requestBody:
 *          content:
 *            application/json:
 *               schema:
 *                   type: object
 *                   properties:
 *                       libelle_typeprestataire:
 *                          type: string
 *                          required: true
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
 * /typeprestataire/{id}:
 *   put:
 *      security:
 *          - bearerAuth: []
 *      description: Update a typeprestataire
 *      tags:
 *          - typeprestataire routes
 *      parameters:
 *          - in: path
 *            name: id
 *            schema: 
 *                type: integer
 *            required: true
 *      requestBody:
 *          content:
 *            application/json:
 *               schema:
 *                   type: object
 *                   properties:
 *                       libelle_typeprestataire:
 *                          type: string
 *                          required: true
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
 * /typeprestataire/{id}:
 *   delete:
 *      security:
 *          - bearerAuth: []
 *      description: Delete a typeprestataire
 *      tags:
 *          - typeprestataire routes
 *      parameters:
 *          - in: path
 *            name: id
 *            schema: 
 *                type: integer
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
 * /typeprestataire:
 *   delete:
 *      security:
 *          - bearerAuth: []
 *      description: Delete all typeprestataire
 *      tags:
 *          - typeprestataire routes
 *      responses:
 *          '200':
 *              description: Resource added successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
*/

export default router;
