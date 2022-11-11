import sceneService from '../services/scene.service.js';
import { pagination } from '../utils/page.js';

export const addScene = (req, res) => {
    const body = req.body;
    sceneService.add(body, (error, results) => {
        if (error) {
            return res.status(400).send({ success: 0, data: error });
        }
        return res.status(200).send({ success: 1, data: results });
    });
}

export const getScenes = (req, res) => {
    const id = req.params.id === "undefined" ? null
        : typeof req.params.id === 'undefined' ? null
        : req.params.id === "{id}" ? null : req.params.id;
    if (!id) {
        sceneService.find((error, results) => {
            if (error) {
                return res.status(400).send({ success: 0, data: error });
            }
            results = pagination(req, results);
            if (results.length === 0) {
                return res.status(400).send({ success: 0, data: "Aucun résultat avec cette page" });
            }
            return res.status(200).send({ success: 1, data: results });
        });
    } else {
        sceneService.findById(id, (error, results) => {
            if (error) {
                return res.status(400).send({ success: 0, data: error });
            }
            return res.status(200).send({ success: 1, data: results });
        });
    }
}

export const updateScene = (req, res) => {
    const id = parseInt(req.params.id);
    const body = req.body;
    sceneService.update(id, body, (error, results) => {
        if (error) {
            return res.status(400).send({ success: 0, data: error });
        }
        return res.status(200).send({ success: 1, data: results });
    });
}

export const deleteScene = (req, res) => {
    const id = parseInt(req.params.id);
    sceneService.del(id, (error, results) => {
        if (error) {
            return res.status(400).send({ success: 0, data: error });
        }
        return res.status(200).send({ success: 1, data: results });
    });
}