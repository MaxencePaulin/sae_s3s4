import express from 'express';
import { findAll, findOne, create, remove, removeAll } from '../controllers/access.controller.js';

const router = express.Router();

router.get('/', findAll);
/**
 * @swagger
 * /access:
 *   get:
 *      description: Return all access
 *      tags:
 *          - Access_route
 *      responses:
 *          '200':
 *              description: Resource added successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */

router.get('/:id_role/:id_droit', findOne);
/**
 * @swagger
 * /access/{id_role}/{id_droit}:
 *   get:
 *      description: Return user by id
 *      tags:
 *          - Access_route
 *      parameters:
 *          - in: path
 *            name: id_role
 *            type: integer
 *            required: true
 *          - in: path
 *            name: id_droit
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
 * /access:
 *   post:
 *      description: Create an access
 *      tags:
 *          - Access_route
 *      parameters:
 *          - in: body
 *            name: user
 *            description: The acces to create.
 *            schema:
 *               type: object
 *               required:
 *                   - id_role
 *                   - id_droit
 *               properties:
 *                   id_role:
 *                       type: integer
 *                   id_droit:
 *                       type: integer
 *      responses:
 *          '200':
 *              description: Resource added successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */

router.delete('/:id_role/:id_droit', remove);
/**
 * @swagger
 * /access/{id_role}/{id_droit}:
 *   delete:
 *      description: Delete an access
 *      tags:
 *          - Access_route
 *      parameters:
 *          - in: path
 *            name: id_role
 *            type: integer
 *            required: true
 *          - in: path
 *            name: id_droit
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
 * /access:
 *   delete:
 *      description: Delete all access
 *      tags:
 *          - Access_route
 *      responses:
 *          '200':
 *              description: Resource added successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */

export default router;