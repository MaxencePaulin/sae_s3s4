// Owners service
const fs = require("fs");

const allOwners = () => {
    try {
        const dataBuffer = fs.readFileSync("data/owners.json");
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch (e) {
        return [];
    }
}

const lireOwners = (callback) => {
    try {
        const result = allOwners();
        return callback(null, result);
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
            if (owner.id === id) {
                result.push(owner);
            }
        });
        if (result[0] == null) {
            return callback([], null);
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