// Owners service
import fs from "fs";

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

export default {
    lireOwners: lireOwners,
    lireIdOwners: lireIdOwners
}