import professeurService from "../services/professeur.service.js";

export const findProfesseur = (req, res) => {
    professeurService.find((error, results) => {
        if (error) {
            return res.status(400).send({success: 0, data: error});
        }
        console.log("Success");
        return res.status(200).send({success: 1, data: results});
    });
}