import {client} from "../server.js";
import Artist from "../models/Artist.model.js";
import { create } from "express-handlebars";

const test = (callback) => {
    try {
        return callback(null, "test Artist réussi");
    }catch (e) {
        console.log("error test");
        console.log(e);
        return callback("erreur", null);
    }
}

const get = ( id, callback) => {
    Ar.findAll().then(data=>{
        return callback(null , data);
    }).catch (e => {
        return callback({locationError: "findAllArtist" , error: e.message }, null);
    });
}
const getById = ( id, callback) => {
    Artist.findByPk(id).then(data=>{
        return callback(null , data);
    }).catch (e => {
        return callback({locationError: "findArtist" , error: e.message }, null);
    });
}

const add = (body, callback) => {
    Artist.create(body).then(data=>{
        return callback(null, data);
    }).catch(e =>{
    return callback({locationError: "addArtist" , error: e.message }, null);
});
}

const del = (params, callback) => {
    //TODO
}

export default {
    test: test
}