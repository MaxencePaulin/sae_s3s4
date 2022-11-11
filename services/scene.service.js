import Scene from '../models/Scene.model.js';

const add = (body, callback) => {
    if (!body.libelle_scene || !body.id_typescene) {
        return callback("Veuillez remplir tous les champs", null);
    }
    Scene.create(body).then(data => {
        return callback(null, data);
    }).catch(e => {
        console.log(e);
        return callback({ locationError: "addScene", error: e.message }, null);
    });
}

const find = (callback) => {
    Scene.findAll().then(data => {
        if (!data) {
            return callback("Aucune scene", null);
        }
        return callback(null, data);
    }).catch(e => {
        return callback({ locationError: "findScene", error: e.message }, null);
    });
}

const findById = (id, callback) => {
    Scene.findByPk(id).then(data => {
        if (!data) {
            return callback("Aucune scene avec cet id", null);
        }
        return callback(null, data);
    }).catch(e => {
        return callback({ locationError: "findByIdScene", error: e.message }, null);
    });
}

const update = (id, body, callback) => {
    if (!body.libelle_scene || !body.id_typescene) {
        return callback("Veuillez remplir tous les champs", null);
    }
    Scene.update(body, { where: { id_scene: id } }).then(data => {
        if (data[0] === 0) {
            return callback("Aucune scene avec cet id", null);
        }
        return callback(null, data);
    }).catch(e => {
        return callback({ locationError: "updateScene", error: e.message }, null);
    });
}

const del = (id, callback) => {
    Scene.destroy({ where: { id_scene: id } }).then(data => {
        if (data === 0) {
            return callback("Aucune scene avec cet id", null);
        }
        return callback(null, data);
    }).catch(e => {
        return callback({ locationError: "deleteScene", error: e.message }, null);
    });
}

export default {
    add: add,
    find: find,
    findById: findById,
    update: update,
    del: del,
}