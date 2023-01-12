import express from 'express';
import { findAll, findOne, create,
    update, remove, removeAll,
    login, register, logout,
    getUserProfile , userWhoReservedEmplacement } from '../controllers/_users.controller.js';
import { protect } from '../utils/jwtUtils.js';

const router = express.Router();


router.get('/userWhoReservedEmplacement', userWhoReservedEmplacement);
/**
 * @swagger
 * /users/userWhoReservedEmplacement:
 *   get:
 *      description: Return user by who reserved an emplacement
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


router.get('/me', protect, getUserProfile);
/**
 * @swagger
 * /users/me:
 *   get:
 *      security:
 *          - bearerAuth: []
 *      description: Return users connected
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

router.get('/', findAll);
/**
 * @swagger
 * /users:
 *   get:
 *      security:
 *          - bearerAuth: []
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
 *      security:
 *          - bearerAuth: []
 *      description: Return user by id
 *      tags:
 *          - Users_routes
 *      parameters:
 *          - in: path
 *            name: id
 *            schema:
 *              type: integer
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
 *      security:
 *          - bearerAuth: []
 *      description: Create an user
 *      tags:
 *          - Users_routes
 *      requestBody:
 *          content:
 *             application/json:
 *                schema:
 *                    type: object
 *                    properties:
 *                        login:
 *                          type: string
 *                          minLength: 1
 *                          maxLength: 50
 *                          example: login
 *                          required: true
 *                        password:
 *                          type: string
 *                          minLength: 4
 *                          maxLength: 50
 *                          example: abcd
 *                          required: true
 *                        email:
 *                          type: string
 *                          minLength: 4
 *                          maxLength: 50
 *                          example: email@mail.com
 *                          required: true
 *                        firstname:
 *                          type: string
 *                          minLength: 1
 *                          maxLength: 50
 *                          example: firstname
 *                          required: true
 *                        lastname:
 *                          type: string
 *                          minLength: 1
 *                          maxLength: 50
 *                          example: lastname
 *                          required: true
 *                        dob:
 *                          type: string
 *                          minLength: 6
 *                          maxLength: 10
 *                          example: 2000-01-01
 *                        bankcard:
 *                          type: string
 *                          minLength: 16
 *                          maxLength: 16
 *                          example: 1234567890123456
 *                        address:
 *                          type: string
 *                          minLength: 1
 *                          maxLength: 50
 *                          example: address
 *                        mobile:
 *                          type: string
 *                          minLength: 10
 *                          maxLength: 10
 *                          example: 0605040302
 *                        genre:
 *                          type: string
 *                          minLength: 1
 *                          maxLength: 255
 *                          example: homme
 *                        id_role:
 *                          type: integer
 *                        id_virtualaccount:
 *                          type: integer
 *                        id_prestataire:
 *                          type: integer
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
 *      security:
 *          - bearerAuth: []
 *      description: Update an user
 *      tags:
 *          - Users_routes
 *      parameters:
 *          - in: path
 *            name: id
 *            schema:
 *              type: integer
 *            required: true
 *      requestBody:
 *          content:
 *             application/json:
 *                schema:
 *                    type: object
 *                    properties:
 *                        login:
 *                          type: string
 *                          minLength: 1
 *                          maxLength: 50
 *                          example: login
 *                          required: true
 *                        password:
 *                          type: string
 *                          minLength: 4
 *                          maxLength: 50
 *                          example: abcd
 *                          required: true
 *                        email:
 *                          type: string
 *                          minLength: 4
 *                          maxLength: 50
 *                          example: email@mail.com
 *                          required: true
 *                        firstname:
 *                          type: string
 *                          minLength: 1
 *                          maxLength: 50
 *                          example: firstname
 *                          required: true
 *                        lastname:
 *                          type: string
 *                          minLength: 1
 *                          maxLength: 50
 *                          example: lastname
 *                          required: true
 *                        dob:
 *                          type: string
 *                          minLength: 6
 *                          maxLength: 10
 *                          example: 2000-01-01
 *                        bankcard:
 *                          type: string
 *                          minLength: 16
 *                          maxLength: 16
 *                          example: 1234567890123456
 *                        address:
 *                          type: string
 *                          minLength: 1
 *                          maxLength: 50
 *                          example: address
 *                        mobile:
 *                          type: string
 *                          minLength: 10
 *                          maxLength: 10
 *                          example: 0605040302
 *                        genre:
 *                          type: string
 *                          minLength: 1
 *                          maxLength: 255
 *                          example: homme
 *                        id_role:
 *                          type: integer
 *                        id_virtualaccount:
 *                          type: integer
 *                        id_prestataire:
 *                          type: integer
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
 *      security:
 *          - bearerAuth: []
 *      description: Delete an user by id
 *      tags:
 *          - Users_routes
 *      parameters:
 *          - in: path
 *            name: id
 *            schema:
 *              type: integer
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
 *      security:
 *          - bearerAuth: []
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
/**
 * @swagger
 * /users/login:
 *   post:
 *      description: Connect to a user
 *      tags:
 *          - Users_routes
 *      requestBody:
 *          content:
 *             application/json:
 *                schema:
 *                    type: object
 *                    properties:
 *                        login:
 *                          type: string
 *                          minLength: 1
 *                          maxLength: 50
 *                          example: login
 *                          required: true
 *                        password:
 *                          type: string
 *                          minLength: 4
 *                          maxLength: 50
 *                          example: abcd
 *                          required: true
 *      responses:
 *          '200':
 *              description: Resource added successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */

router.post('/register', register);
/**
 * @swagger
 * /users/register:
 *   post:
 *      description: register an user
 *      tags:
 *          - Users_routes
 *      requestBody:
 *          content:
 *             application/json:
 *                schema:
 *                    type: object
 *                    properties:
 *                        login:
 *                          type: string
 *                          minLength: 1
 *                          maxLength: 50
 *                          example: login
 *                          required: true
 *                        password:
 *                          type: string
 *                          minLength: 4
 *                          maxLength: 50
 *                          example: abcd
 *                          required: true
 *                        email:
 *                          type: string
 *                          minLength: 4
 *                          maxLength: 50
 *                          example: email@mail.com
 *                          required: true
 *                        firstname:
 *                          type: string
 *                          minLength: 1
 *                          maxLength: 50
 *                          example: firstname
 *                          required: true
 *                        lastname:
 *                          type: string
 *                          minLength: 1
 *                          maxLength: 50
 *                          example: lastname
 *                          required: true
 *                        dob:
 *                          type: string
 *                          minLength: 6
 *                          maxLength: 10
 *                          example: 2000-01-01
 *                        address:
 *                          type: string
 *                          minLength: 1
 *                          maxLength: 50
 *                          example: address
 *                        mobile:
 *                          type: string
 *                          minLength: 10
 *                          maxLength: 10
 *                          example: 0605040302
 *                        genre:
 *                          type: string
 *                          minLength: 1
 *                          maxLength: 255
 *                          example: homme
 *      responses:
 *          '200':
 *              description: Resource added successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */

router.post('/logout', logout);
/**
 * @swagger
 * /users/logout:
 *   post:
 *      description: logout an user (delete token in swagger at same time)
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

export default router;
