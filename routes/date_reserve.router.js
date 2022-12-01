import express from 'express';
import { findAll, findOne, create, update, remove, removeAll } from '../controllers/date_reserve.controller.js';

const router = express.Router();

router.get('/', findAll);
router.get('/:id', findOne);
router.post('/', create);
router.put('/:id', update);
router.delete('/:id', remove);
router.delete('/', removeAll);

export default router;