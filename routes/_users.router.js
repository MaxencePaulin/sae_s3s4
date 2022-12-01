import express from 'express';
import { findAll, findOne, create, update, remove, removeAll } from '../controllers/_users.controller.js';

const router = express.Router();

router.get('/', findAll);
/**
 * @swagger
 * /users:
 *   get:
 *      description: Return all users
 *      tags:
 *          - Users_route
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
 * /{id}:
 *   get:
 *      description: Return user by id
 *      tags:
 *          - Users_route
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
 * /:
 *   post:
 *      description: Create a user
 *      tags:
 *          - Users_route
 *      parameters:
 *          - in: body
 *            name: user
 *            description: The user to create.
 *            schema:
 *               type: object
 *               required:
 *                   - id
 *                   - firstname
 *                   - lastname
 *                   - username
 *                   - mail
 *                   - password
 *                   - role
 *                   - status
 *                   - created_at
 *                   - updated_at
 *                   - deleted_at
 *               properties:
 *                   id:
 *                       type: integer
 *                   firstname:
 *                       type: string
 *                   lastname:
 *                       type: string
 *                   username:
 *                       type: string
 *                   mail:
 *                       type: string
 *                   password:
 *                       type: string
 *                   role:
 *                       type: integer
 *                   status:
 *                       type: integer
 *                   created_at:
 *                       type: string
 *                   updated_at:
 *                       type: string
 *                   deleted_at:
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
router.put('/:id', update);
router.delete('/:id', remove);
router.delete('/', removeAll);


// router.post('/login', login);
// router.post('/register', register);
// router.post('/logout', logout);

export default router;