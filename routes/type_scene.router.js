import express from 'express';
import { findAll, findOne, create, update, remove, removeAll } from '../controllers/type_scene.controller.js';

const router = express.Router();

router.get('/', findAll);
/**
 * @swagger
 * /typescene:
 *   get:
 *      description: Return all typescene
 *      tags:
 *          - typescene routes
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
 * /typescene/{id}:
 *   get:
 *      description: Return typescene by id
 *      tags:
 *          - typescene routes
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
 * /typescene:
 *   post:
 *      security:
 *          - bearerAuth: []
 *      description: Create a typescene
 *      tags:
 *          - typescene routes
 *      requestBody:
 *          content:
 *            application/json:
 *               schema:
 *                   type: object
 *                   properties:
 *                       libelle_typescene:
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
 * /typescene/{id}:
 *   put:
 *      security:
 *          - bearerAuth: []
 *      description: Update a typescene
 *      tags:
 *          - typescene routes
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
 *                       libelle_typescene:
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
 * /typescene/{id}:
 *   delete:
 *      security:
 *          - bearerAuth: []
 *      description: Delete a typescene
 *      tags:
 *          - typescene routes
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
 * /typescene:
 *   delete:
 *      security:
 *          - bearerAuth: []
 *      description: Delete all typescene
 *      tags:
 *          - typescene routes
 *      responses:
 *          '200':
 *              description: Resource added successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
*/

export default router;

