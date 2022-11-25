import express from 'express';
import userController from '../controllers/user.controller.js';

const router = express.Router();

router.get('/', userController.getUsers);
router.get('/:id', userController.getUserById);
// router.post('/', userController.addUser);
router.put('/:id', userController.updateUser);
router.delete('/:id', userController.deleteUser);

export default router;