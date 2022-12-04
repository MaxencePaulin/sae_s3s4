import express from 'express';
import { findAll, findOne, create, update, remove, removeAll } from '../controllers/droit.controller.js';

const router = express.Router();

router.get('/', findAll);
/**
 * @swagger
 * /droit:
 *   get:
 *      description: Return all droit
 *      tags:
 *          - Droit_routes
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
 * /droit/{id}:
 *   get:
 *      description: Return droit by id_droit
 *      tags:
 *          - Droit_routes
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
 * /droit:
 *   post:
 *      description: Create an droit
 *      tags:
 *          - Droit_routes
 *      parameters:
 *          - in: body
 *            name: droit
 *            description: The droit to create.
 *            schema:
 *               type: object
 *               required:
 *                   - id_droit
 *               properties:
 *                   id_droit:
 *                       type: integer
 *                   libelle_droit:
 *                       type: string
 *      responses:
 *          '201':
 *              description: Resource added successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */

router.put('/:id', update);
/**
 * @swagger
 * /droit/{id}:
 *   put:
 *      description: Update an droit
 *      tags:
 *          - Droit_routes
 *      parameters:
 *          - in: path
 *            name: id
 *            type: integer
 *            required: true
 *          - in: body
 *            name: droit
 *            description: The droit to update.
 *            schema:
 *               type: object
 *               required:
 *                   - id_droit
 *               properties:
 *                   id_droit:
 *                       type: integer
 *                   libelle_droit:
 *                       type: string
 *      responses:
 *          '201':
 *              description: Resource added successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */

router.delete('/:id', remove);
/**
 * @swagger
 * /droit/{id}:
 *   delete:
 *      description: Delete an droit
 *      tags:
 *          - Droit_routes
 *      parameters:
 *          - in: path
 *            name: id
 *            type: integer
 *            required: true
 *      responses:
 *          '201':
 *              description: Resource added successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */

router.delete('/', removeAll);
/**
 * @swagger
 * /droit:
 *   delete:
 *      description: Delete all droit
 *      tags:
 *          - Droit_routes
 *      responses:
 *          '201':
 *              description: Resource added successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */

export default router;
