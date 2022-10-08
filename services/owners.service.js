// Owners service
const fs = require("fs");

const pagination = (req, results) => {
    if (!req.query.page || req.query.page < 1) {
        req.query.page = 1;
    }
    if (!req.query.limit || req.query.limit < 1) {
        req.query.limit = 10;
    }
    const page = parseInt(req.query.page);
    const limit = parseInt(req.query.limit);
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;
    const result = results.slice(startIndex, endIndex);
    if (result.length === 0) {
        return [];
    }
    const nbPage= Math.ceil(results.length / limit);
    const totalResult = results.length;
    const resultsPage = {page: page, limit: limit, nbPage: nbPage, totalResult: totalResult, result: result};
    return resultsPage;
}

const allOwners = () => {
    try {
        const dataBuffer = fs.readFileSync("data/owners.json");
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch (e) {
        return [];
    }
}

const lireOwners = (req, callback) => {
    try {
        const result = allOwners();
        if (result.length === 0) {
            return callback(`No owners found`, null);
        }
        const finalResult = pagination(req, result);
        if (finalResult.length === 0) {
            return callback(`No owners found for page ${req.query.page}`, null);
        }
        return callback(null, finalResult);
    } catch (e) {
        console.log("error");
        console.log(e);
        return callback([], null);
    }
};

const saveOwners = (owners) => {
    const dataJSON = JSON.stringify(owners);
    fs.writeFileSync("data/owners.json", dataJSON);
};

const lireIdOwners = (id, callback) => {
    try {
        const ownersL = allOwners();
        const result = [];
        ownersL.forEach((owner) => {
            if (owner.id === parseInt(id)) {
                result.push(owner);
            }
        });
        if (result[0] == null) {
            return callback("No result", null);
        }
        return callback(null, result);
    }catch (e) {
        console.log("error");
        console.log(e);
        return callback([], null);
    }
}

module.exports = {
    lireOwners: lireOwners,
    lireIdOwners: lireIdOwners
}