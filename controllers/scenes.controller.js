import dotenv from "dotenv";
dotenv.config();
// const datasource = process.env.DATASOURCE;
import scenesService from "../services/scenes.service.js";
import {pagination} from "../utils/page.js";

// GET 
const listScenes = (req, res) => {
    scenesService.lireScenes((error, results) => {
        if (error) {
            return res.status(400).send({ success: 0, data: error });
        }
        console.log("Success");
        // 200 => OK
        results = pagination(req, results);
        if (results.length === 0) {
            return res.status(400).send({ success: 0, data: "Aucun résultat avec cette page" });
        }
        return res.status(200).send({ success: 1, data: results });
    });
};

const listSceneById = (req, res) => {
    scenesService.lireIdScenes(req.params.id, (error, results) => {
        if (error) {
            return res.status(400).send({ success: 0, data: error });
        }
        console.log("Success");
        return res.status(200).send({ success: 1, data: results});
    });
};

export default {
    listScenes: listScenes,
    listSceneById: listSceneById
}