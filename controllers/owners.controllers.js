const dotenv = require("dotenv");
dotenv.config();
// const datasource = process.env.DATASOURCE;
const ownersService = require("../services/owners-fs.service.js");

// GET 
exports.listOwners = (req, res, next) => {
    ownersService.lireOwners((error, results) => {
        if (error) {
            return res.status(400).send({ success: 0, data: error });
        }
        var page = parseInt(req.params.page);
        var per_page = 6;
        var nbPage = parseInt(results.length/6)+1;
        var data = []; 
        var i = (page-1)*6 || 0;
        var j = i+6;
        for (i; i<j; i++) {
            if (results[i] != undefined) {
                data.push(results[i]); 
            }else {
                break;
            }
        } 
        if (data[0] == null) {
            const err=new Error("Not Found");
            return next(err);
        }
        console.log("Success");
        // 200 => OK
        return res.status(200).send({ success: 1, per_page: per_page, page: page, nbPage: nbPage, nbOwners: results.length, data: data });
    });
};

exports.listOwnerById = (req, res, next) => {
    const id = parseInt(req.params.id);
    ownersService.lireIdOwners(id, (error, results) => {
        if (error) {
            return res.status(400).send({ success: 0, data: error });
        }
        console.log("Success");
        return res.status(200).send({ success: 1, data: results});
    });
};