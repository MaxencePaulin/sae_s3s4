import express from 'express';
import { findAll, findOne, create, remove, removeAll } from '../controllers/origine_artist.controller.js';

const router = express.Router();

router.get('/', findAll);
/**
 * @swagger
 * /origineartist:
 *   get:
 *      description: Return all origineartist
 *      tags:
 *          - origineartist_routes
 *      responses:
 *          '200':
 *              description: Resource added successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */

router.get('/one', findOne);
/**
 * @swagger
 * /origineartist/one:
 *   get:
 *      description: Return artist by id_artiste
 *      tags:
 *          - origineartist_routes
 *      parameters:
 *          - in: query
 *            name: id_artist
 *            type: integer
 *            required: true
 *          - in: query
 *            name: id_origine
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
 * /origineartist:
 *   post:
 *      description: Create an artist
 *      tags:
 *          - origineartist_routes
 *      parameters:
 *          - in: body
 *            name: origineartist
 *            description: The origineartist to create.
 *            schema:
 *              type: object
 *              required:
 *                  - id_artist
 *                  - id_origine
 *              properties:
 *                  id_artist:
 *                      type: integer
 *                  id_origine:
 *                      type: integer
 *      responses:
 *          '200':
 *              description: Resource added successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */

router.delete('/one', remove);
/**
 * @swagger
 * /origineartist:
 *   delete:
 *      description: Delete an artist
 *      tags:
 *          - origineartist_routes
 *      parameters:
 *          - in: query
 *            name: id_artist
 *            type: integer
 *            required: true
 *          - in: query
 *            name: id_origine
 *            type: integer
 *            required: true
 *      responses:
 *          '200':
 *              description: Resource deleted successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */

router.delete('/', removeAll);
/**
 * @swagger
 * /origineartist:
 *   delete:
 *      description: Delete all artist
 *      tags:
 *          - origineartist_routes
 *      responses:
 *          '200':
 *              description: Resource deleted successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
*/

export default router;
