import express from 'express';
import { findAll, findOne, create, remove, removeAll } from '../controllers/propose.controller.js';

const router = express.Router();

router.get('/', findAll);
router.get('/one', findOne);
router.post('/', create);
router.delete('/one', remove);
router.delete('/', removeAll);

export default router;
