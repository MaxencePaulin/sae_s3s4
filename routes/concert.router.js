import express from 'express';
import { findAll, findOne, create, update, remove, removeAll } from '../controllers/concert.controller.js';

const router = express.Router();

router.get('/', findAll);
/**
 * @swagger
 * /concert:
 *   get:
 *      description: Return all concert
 *      tags:
 *          - Concert_routes
 *      responses:
 *          '200':
 *              description: Resource added successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */

router.get('/:id_artist/:id_scene', findOne);
/**
 * @swagger
 * /concert/{id_artist}/{id_scene}:
 *   get:
 *      description: Return artist by id_artiste
 *      tags:
 *          - Concert_routes
 *      parameters:
 *          - in: path
 *            name: id_artist
 *            type: integer
 *            required: true
 *          - in: path
 *            name: id_scene
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
router.put('/:id', update);
router.delete('/:id', remove);
router.delete('/', removeAll);

export default router;