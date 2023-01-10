import express from 'express';
import { findAll, findOne, create, update, remove, removeAll  , NationalityByMusicstyle} from '../controllers/music_style.controller.js';

const router = express.Router();

router.get('/nationalityStyleByMusicStyle/:id', NationalityByMusicstyle);
/**
 * @swagger
 * /musicstyle/nationalityStyleByMusicStyle/{id}:
 *   get:
 *      description: Display Nationality By a Music Style
 *      tags:
 *          - musicstyle_routes
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
 * /musicstyle:
 *   get:
 *      description: Return all musicstyle
 *      tags:
 *          - musicstyle_routes
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
  * /musicstyle/{id}:
  *   get:
  *      description: Return musicstyle by id_musicstyle
  *      tags:
  *          - musicstyle_routes
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
 * /musicstyle:
 *   post:
 *      description: Create an musicstyle
 *      tags:
 *          - musicstyle_routes
 *      requestBody:
 *          content:
 *             application/json:
 *                schema:
 *                    type: object
 *                    properties:
 *                        libelle_musicstyle:
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
 * /musicstyle/{id}:
 *   put:
 *      description: Update an musicstyle
 *      tags:
 *          - musicstyle_routes
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
 *                        libelle_musicstyle:
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
 * /musicstyle/{id}:
 *   delete:
 *      description: Delete an musicstyle
 *      tags:
 *          - musicstyle_routes
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
 * /musicstyle:
 *   delete:
 *      description: Delete all musicstyle
 *      tags:
 *          - musicstyle_routes
 *      responses:
 *          '200':
 *              description: Resource added successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
*/

export default router;
