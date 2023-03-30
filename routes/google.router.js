import express from 'express';
import {gooError, googleCallBack, googleOauth, gooSuccess} from "../controllers/google.controller.js";

const router = express.Router();


router.get('/auth/google', googleOauth);
/**
 * @swagger
 * /auth/google:
 *   get:
 *      description: Google Oauth
 *      tags:
 *          - Google
 *      responses:
 *          '200':
 *              description: Oauth
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */

router.get('/auth/google/callback', googleCallBack);
/**
 * @swagger
 * /auth/google/callback:
 *   get:
 *      description: Return of Google Oauth
 *      tags:
 *          - Google
 *      responses:
 *          '200':
 *              description: Connection Ok
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */

router.get('/success', gooSuccess);

router.get('/error', gooError);

export default router;
