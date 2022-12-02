import express from 'express';
import { findAll, findOne, create, update, remove, removeAll } from '../controllers/bought.controller.js';

const router = express.Router();

router.get('/', findAll);
/**
 * @swagger
 * /bought:
 *   get:
 *      description: Return all bought
 *      tags:
 *          - Bought_route
 *      responses:
 *          '200':
 *              description: Resource added successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */

router.get('/:id', findOne);
router.post('/', create);

router.put('/:id', update);

router.get('/:id', findOne);
router.post('/', create);
router.put('/:id', update);
router.delete('/:id', remove);
router.delete('/', removeAll);

export default router;