// Scenes service
const fs = require("fs");

const allScenes = () => {
    try {
        const dataBuffer = fs.readFileSync("data/scenes.json");
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch (e) {
        return [];
    }
}

const lireScenes = (callback) => {
    try {
        const result = allScenes();
        if (result.length === 0) {
            return callback(`No scenes found`, null);
        }
        return callback(null, result);
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