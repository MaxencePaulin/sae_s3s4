import dotenv from "dotenv";
import ownersService from "../services/owners.service.js";
import { pagination } from "../utils/page.js";

dotenv.config();

// GET 
const listOwners = (req, res) => {
    ownersService.lireOwners(req, (error, results) => {
        if (error) {
            return res.status(400).send({ success: 0, data: error });
        }
        console.log("success");
        results = pagination(req, results);
        if (results.length === 0) {
            return res.status(400).send({ success: 0, data: "Aucun résultat avec cette page" });
        }
        return res.status(200).send({ success: 1, data: results });
    });
};

const listOwnerById = (req, res) => {
    ownersService.lireIdOwners(req.params.id, (error, results) => {
        if (error) {
            return res.status(400).send({ success: 0, data: error });
        }
        console.log("Success");
        return res.status(200).send({ success: 1, data: results});
    });
};

export default {
    listOwners: listOwners,
    listOwnerById: listOwnerById
}