import express from 'express';
import { findAll, findOne, create, update, remove, removeAll } from '../controllers/prestataire.controller.js';
import cache from "../middleware/cache.middleware.js";

const router = express.Router();

router.get('/', cache(100000), findAll);
/**
 * @swagger
 * /prestataire:
 *   get:
 *      description: Return all prestataire
 *      tags:
 *          - Prestataire routes
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
 * /prestataire/{id}:
 *   get:
 *      description: Return prestataire by id
 *      tags:
 *          - Prestataire routes
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
 * /prestataire:
 *   post:
 *      description: Create a prestataire
 *      tags:
 *          - Prestataire routes
 *      requestBody:
 *          content:
 *            application/json:
 *               schema:
 *                   type: object
 *                   properties:
 *                       libelle_prestataire:
 *                          type: string
 *                       id_typeprestataire:
 *                          type: integer
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
 * /prestataire/{id}:
 *   put:
 *      description: Update a prestataire
 *      tags:
 *          - Prestataire routes
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
 *                       libelle_prestataire:
 *                          type: string
 *                       id_typeprestataire:
 *                          type: integer
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
 * /prestataire/{id}:
 *   delete:
 *      description: Delete a prestataire
 *      tags:
 *          - Prestataire routes
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
 * /prestataire:
 *   delete:
 *      description: Delete all prestataire
 *      tags:
 *          - Prestataire routes
 *      responses:
 *          '200':
 *              description: Resource added successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */

export default router;
