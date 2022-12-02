import express from 'express';
import { findAll, findOne, create, remove, removeAll } from '../controllers/bought.controller.js';

const router = express.Router();

router.get('/', findAll);
/**
 * @swagger
 * /bought:
 *   get:
 *      description: Return all bought
 *      tags:
 *          - Bought_routes
 *      responses:
 *          '200':
 *              description: Resource added successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */

router.get('/one', findOne);
router.post('/', create);
router.delete('/one', remove);
router.delete('/', removeAll);

export default router;