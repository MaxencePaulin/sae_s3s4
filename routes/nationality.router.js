import express from 'express';
import { findAll, findOne, create, update, remove, removeAll } from '../controllers/nationality.controller.js';

const router = express.Router();

router.get('/', findAll);
/**
 * @swagger
 * /nationality:
 *   get:
 *      description: Return all music_style
 *      tags:
 *          - Music_style_routes
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
 * /nationality:
 *   post:
 *      description: Create an music_style
 *      tags:
 *          - Nationality route
 *      parameters:
 *          - in: body
 *            name: music style
 *            description: The music style to create.
 *            schema:
 *               type: object
 *               required:
 *                   - id_nationality
 *               properties:
 *                   id_nationality:
 *                       type: integer
 *                   libelle_nationality:
 *                       type: string
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
 * /music_style/{id}:
 *   put:
 *      description: Update an music_style
 *      tags:
 *          - Nationality route
 *      parameters:
 *          - in: path
 *            name: id
 *            type: integer
 *            required: true
 *          - in: body
 *            name: music_style
 *            description: The music_style to update.
 *            schema:
 *               type: object
 *               required:
 *                   - id_nationality
 *               properties:
 *                   id_nationality:
 *                       type: integer
 *                   libelle_nationality:
 *                       type: string
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
 * /nationality/{id}:
 *   delete:
 *      description: Delete an nationality
 *      tags:
 *          - Nationality route
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
 * /nationality:
 *   delete:
 *      description: Delete all nationality
 *      tags:
 *          - Nationality route
 *      responses:
 *          '200':
 *              description: Resource added successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
*/

export default router;
