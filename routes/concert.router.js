import express from 'express';
import { findAll, findOne, create, remove, removeAll } from '../controllers/concert.controller.js';

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

router.get('/one', findOne);
/**
 * @swagger
 * /concert/one:
 *   get:
 *      description: Return artist by id_artiste
 *      tags:
 *          - Concert_routes
 *      parameters:
 *          - in: query
 *            name: id_artist
 *            type: integer
 *            required: true
 *          - in: query
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
router.delete('/one', remove);
router.delete('/', removeAll);

export default router;