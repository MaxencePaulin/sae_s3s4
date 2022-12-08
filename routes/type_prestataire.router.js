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
 * /typeprestataire:
 *   post:
 *      description: Create a typeprestataire
 *      tags:
 *          - typeprestataire routes
 *      parameters:
 *          - in: body
 *            name: typeprestataire
 *            description: The typeprestataire to create.
 *            schema:
 *              type: object
 *              required:
 *                  - libelle_typeprestataire
 *              properties:
 *                  libelle_typeprestataire:
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
 * /typeprestataire/{id}:
 *   put:
 *      description: Update a typeprestataire
 *      tags:
 *          - typeprestataire routes
 *      parameters:
 *          - in: path
 *            name: id
 *            type: integer
 *            required: true
 *          - in: body
 *            name: typeprestataire
 *            description: The typeprestataire to update.
 *            schema:
 *              type: object
 *              required:
 *                  - libelle_typeprestataire
 *              properties:
 *                  libelle_typeprestataire:
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
 * /typeprestataire/{id}:
 *   delete:
 *      description: Delete a typeprestataire
 *      tags:
 *          - typeprestataire routes
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
 * /typeprestataire:
 *   delete:
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
