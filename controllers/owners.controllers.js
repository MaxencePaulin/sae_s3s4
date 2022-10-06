const dotenv = require("dotenv");
dotenv.config();
// const datasource = process.env.DATASOURCE;
const ownersService = require("../services/owners.service.js");

// GET 
exports.listOwners = (req, res, next) => {
    ownersService.lireOwners((error, results) => {
        if (error) {
            return res.status(400).send({ success: 0, data: error });
        }
        console.log("success");
        return res.status(200).send({ success: 1, data: results });
    });
};

exports.listOwnerById = (req, res, next) => {
    ownersService.lireIdOwners(req.params.id, (error, results) => {
        if (error) {
            return res.status(400).send({ success: 0, data: error });
        }
        console.log("Success");
        return res.status(200).send({ success: 1, data: results});
    });
};