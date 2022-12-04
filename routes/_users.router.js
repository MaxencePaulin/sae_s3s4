import express from 'express';
import { findAll, findOne, create,
    update, remove, removeAll, login } from '../controllers/_users.controller.js';

const router = express.Router();

router.get('/', findAll);
/**
 * @swagger
 * /users:
 *   get:
 *      description: Return all users
 *      tags:
 *          - Users_routes
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
 * /users/{id}:
 *   get:
 *      description: Return user by id
 *      tags:
 *          - Users_routes
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
 * /users:
 *   post:
 *      description: Create an user
 *      tags:
 *          - Users_routes
 *      parameters:
 *          - in: body
 *            name: user
 *            description: The user to create.
 *            schema:
 *               type: object
 *               required:
 *                   - login
 *                   - password
 *                   - email
 *                   - firstname
 *                   - lastname
 *                   - dob
 *                   - bankcard
 *                   - address
 *                   - mobile
 *                   - genre
 *                   - id_role
 *                   - id_virtualaccount
 *                   - id_prestataire
 *               properties:
 *                   login:
 *                       type: string
 *                   password:
 *                       type: string
 *                   username:
 *                       type: string
 *                   email:
 *                       type: string
 *                   firstname:
 *                       type: integer
 *                   lastname:
 *                       type: integer
 *                   dob:
 *                       type: string
 *                   bankcard:
 *                       type: string
 *                   address:
 *                       type: string
 *                   mobile:
 *                       type: string
 *                   genre:
 *                       type: string
 *                   id_role:
 *                       type: integer
 *                   id_virtualaccount:
 *                       type: integer
 *                   id_prestataire:
 *                       type: integer
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
 * /users/{id}:
 *   put:
 *      description: Update an user
 *      tags:
 *          - Users_routes
 *      parameters:
 *          - in: path
 *            name: id
 *            type: integer
 *            required: true
 *          - in: body
 *            name: user
 *            description: The user to create.
 *            schema:
 *               type: object
 *               required:
 *                   - login
 *                   - password
 *                   - email
 *                   - firstname
 *                   - lastname
 *                   - dob
 *                   - bankcard
 *                   - address
 *                   - mobile
 *                   - genre
 *                   - id_role
 *                   - id_virtualaccount
 *                   - id_prestataire
 *               properties:
 *                   login:
 *                       type: string
 *                   password:
 *                       type: string
 *                   username:
 *                       type: string
 *                   email:
 *                       type: string
 *                   firstname:
 *                       type: integer
 *                   lastname:
 *                       type: integer
 *                   dob:
 *                       type: string
 *                   bankcard:
 *                       type: string
 *                   address:
 *                       type: string
 *                   mobile:
 *                       type: string
 *                   genre:
 *                       type: string
 *                   id_role:
 *                       type: integer
 *                   id_virtualaccount:
 *                       type: integer
 *                   id_prestataire:
 *                       type: integer
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
 * /users/{id}:
 *   delete:
 *      description: Delete an user by id
 *      tags:
 *          - Users_routes
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

router.delete('/', removeAll);
/**
 * @swagger
 * /users:
 *   delete:
 *      description: Delete all users
 *      tags:
 *          - Users_routes
 *      responses:
 *          '200':
 *              description: Resource added successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */

router.post('/login', login);
// router.post('/register', register);
// router.post('/logout', logout);

export default router;