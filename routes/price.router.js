import express from 'express';
import { findAll, findOne, create, update, remove, removeAll } from '../controllers/price.controller.js';

const router = express.Router();

router.get('/', findAll);
/**
 * @swagger
 * /price:
 *   get:
 *      description: Return all price
 *      tags:
 *          - Price routes
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
 * /price/{id}:
 *   get:
 *      description: Return price by id
 *      tags:
 *          - Price routes
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
 * /price:
 *   post:
 *      description: Create a price
 *      tags:
 *          - Price routes
 *      parameters:
 *          - in: body
 *            name: price
 *            description: The price to create.
 *            schema:
 *              type: object
 *              required:
 *                  - normal_price
 *                  - reduc_price
 *              properties:
 *                  normal_price:
 *                      type: integer
 *                  reduc_price:
 *                      type: integer
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
 * /price/{id}:
 *   put:
 *      description: Update a price
 *      tags:
 *          - Price routes
 *      parameters:
 *          - in: path
 *            name: id
 *            type: integer
 *            required: true
 *          - in: body
 *            name: price
 *            description: The price to update.
 *            schema:
 *              type: object
 *              properties:
 *                  normal_price:
 *                      type: integer
 *                  reduc_price:
 *                      type: integer
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
 * /price/{id}:
 *   delete:
 *      description: Delete a price
 *      tags:
 *          - Price routes
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
 * /price:
 *   delete:
 *      description: Delete all price
 *      tags:
 *          - Price routes
 *      responses:
 *          '200':
 *              description: Resource added successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */

export default router;
