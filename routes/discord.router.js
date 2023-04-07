import express from 'express';
import { auth } from '../controllers/discord.controller.js';

const router = express.Router();

router.get('/', auth);
/**
 * @swagger
 * /auth :
 *   get:
 *      description: Routes for the discord auth 
 *      tags:
 *          - auth_routes
 *      responses:
 *          '200':
 *              description: Resource added successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */

export default router ;