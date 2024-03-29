import express from "express";
import scrap from "../controllers/scrapper.controller.js";

const router = express.Router();
router.get('/', scrap);
/**
 * @swagger
 * /scrap:
 *   get:
 *      description: Return all quotes from the scrapper
 *      tags:
 *          - scrape routes
 *      responses:
 *          '200':
 *              description: Resource added successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */

export default router;