// Scenes service
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
    return {page: page, limit: limit, nbPage: nbPage, totalResult: totalResult, result: result};
}

const allScenes = () => {
    try {
        const dataBuffer = fs.readFileSync("data/scenes.json");
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch (e) {
        return [];
    }
}

const lireScenes = (req, callback) => {
    try {
        const result = allScenes();
        if (result.length === 0) {
            return callback(`No scenes found`, null);
        }
        const finalResult = pagination(req, result);
        if (finalResult.length === 0) {
            return callback(`No scenes found for page ${req.query.page}`, null);
        }
        return callback(null, finalResult);
    } catch (e) {
        console.log("error");
        console.log(e);
        return callback([], null);
    }
};

const saveScenes = (scenes) => {
    const dataJSON = JSON.stringify(scenes);
    fs.writeFileSync("data/scenes.json", dataJSON);
};

const lireIdScenes = (id, callback) => {
    try {
        const scenesL = allScenes();
        const result = [];
        scenesL.forEach((scene) => {
            if (scene.id === parseInt(id)) {
                result.push(scene);
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
    lireScenes: lireScenes,
    lireIdScenes: lireIdScenes
}