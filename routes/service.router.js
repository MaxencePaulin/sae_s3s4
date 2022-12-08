import express from 'express';
import { findAll, findOne, create, update, remove, removeAll } from '../controllers/service.controller.js';

const router = express.Router();

router.get('/', findAll);
/**
 * @swagger
 * /services:
 *   get:
 *      description: Return all services
 *      tags:
 *          - services routes
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
 * /services/{id}:
 *   get:
 *      description: Return services by id
 *      tags:
 *          - services routes
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
 * /services:
 *   post:
 *      description: Create a services
 *      tags:
 *          - services routes
 *      parameters:
 *          - in: body
 *            name: services
 *            description: The services to create.
 *            schema:
 *              type: object
 *              required:
 *                  - libelle_services
 *              properties:
 *                  libelle_services:
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
 * /services/{id}:
 *   put:
 *      description: Update a services
 *      tags:
 *          - services routes
 *      parameters:
 *          - in: path
 *            name: id
 *            type: integer
 *            required: true
 *          - in: body
 *            name: services
 *            description: The services to update.
 *            schema:
 *              type: object
 *              required:
 *                  - libelle_services
 *              properties:
 *                  libelle_services:
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
 * /services/{id}:
 *   delete:
 *      description: Delete a services
 *      tags:
 *          - services routes
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
 * /services:
 *   delete:
 *      description: Delete all services
 *      tags:
 *          - services routes
 *      responses:
 *          '200':
 *              description: Resource added successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
*/

export default router;

