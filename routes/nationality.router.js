import express from 'express';
import { findAll, findOne, create, update, remove, removeAll , musicStyleByNationality } from '../controllers/nationality.controller.js';

const router = express.Router();

router.get('/musicStyleByNationality/:id', musicStyleByNationality);
/**
 * @swagger
 * /nationality/musicStyleByNationality/{id}:
 *   get:
 *      description: Display scenes By a Style
 *      tags:
 *          - Nationality routes
 *      parameters:
 *          - in: path
 *            name: id
 *            schema:
 *              type: integer
 *            required: true
 *      responses:
 *          '200':
 *              description: Resource updated successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */

router.get('/', findAll);
/**
 * @swagger
 * /nationality:
 *   get:
 *      description: Return all nationality
 *      tags:
 *          - Nationality routes
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
  * /nationality/{id}:
  *   get:
  *      description: Return nationality by id
  *      tags:
  *          - Nationality routes
  *      parameters:
  *          - in: path
  *            name: id
  *            schema: 
 *                type: integer
 *             required: true
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
 * /nationality:
 *   post:
 *      description: Create an nationality
 *      tags:
 *          - Nationality routes
 *      requestBody:
 *          content:
 *            application/json:
 *               schema:
 *                   type: object
 *                   properties:
 *                       libelle_nationality:
 *                         type: string
 *                         example: french
 *                         required: true
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
 * /nationality/{id}:
 *   put:
 *      security:
 *           - bearerAuth: []
 *      description: Update an nationality
 *      tags:
 *          - Nationality routes
 *      parameters:
 *          - in: path
 *            name: id
 *            schema: 
 *                type: integer
 *            required: true
 *      requestBody:
 *          content:
 *             application/json:
 *                schema:
 *                    type: object
 *                    properties:
 *                        libelle_nationality:
 *                          type: string
 *                          example: french
 *                          required: true
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
 * /nationality/{id}:
 *   delete:
 *      description: Delete an nationality
 *      tags:
 *          - Nationality routes
 *      parameters:
 *          - in: path
 *            name: id
 *           schema: 
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
 * /nationality:
 *   delete:
 *      description: Delete all nationality
 *      tags:
 *          - Nationality routes
 *      responses:
 *          '200':
 *              description: Resource added successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
*/


export default router;
