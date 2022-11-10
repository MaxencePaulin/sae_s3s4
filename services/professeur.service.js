import Professeur from "../models/Professeur.model.js";

const find = (callback) => {
    Professeur.findAll().then(data => {
        return callback(null, data);
    }).catch(e => {
        return callback({ locationError: "findProfesseur", error: e.message }, null);
    });
}

export default {
    find: find
}