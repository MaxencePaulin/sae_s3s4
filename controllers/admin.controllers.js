const adminServices = require('../services/admin.service');

exports.test = (req, res) => {
    adminServices.test((error, results) => {
        if (error) {
            return res.status(400).send({ success: 0, data: error });
        }
        return res.status(200).send({ success: 1, data: results });
    });
}