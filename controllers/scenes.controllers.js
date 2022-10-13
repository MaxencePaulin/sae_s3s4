const dotenv = require("dotenv");
dotenv.config();
// const datasource = process.env.DATASOURCE;
const scenesService = require("../services/scenes.service.js");
const {pagination} = require("../utils/page");

// GET 
exports.listScenes = (req, res, next) => {
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

exports.listSceneById = (req, res, next) => {
    scenesService.lireIdScenes(req.params.id, (error, results) => {
        if (error) {
            return res.status(400).send({ success: 0, data: error });
        }
        console.log("Success");
        return res.status(200).send({ success: 1, data: results});
    });
};