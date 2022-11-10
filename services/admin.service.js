import {client} from "../server.js";

const test = (callback) => {
    try {
        return callback(null, "test admin réussi");
    }catch (e) {
        console.log("error test");
        console.log(e);
        return callback("erreur", null);
    }
}

const find = (body, callback) => {
    //TODO
}

const add = (body, callback) => {
    //TODO
}

const del = (params, callback) => {
    //TODO
}

export default {
    test: test
}