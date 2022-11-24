import User from '../models/User.model.js';
import Qr_code from "../models/Qr_code.model.js";
import Virtualaccount from "../models/Virtualaccount.model.js";

const test = (callback) => {
    try {
        return callback(null, "test user réussi");
    }catch (e) {
        console.log("error test");
        console.log(e);
        return callback("erreur", null);
    }
}

const getUsers = (callback) => {
    User.findAll().then(data => {
        if (data.length === 0) {
            return callback("Aucun utilisateur", null);
        }
        return callback(null, data);
    }).catch(e => {
        return callback({ locationError: "getUsers", error: e.message }, null);
    });
}

const getUserById = (id, callback) => {
    User.findByPk(id).then(data => {
        if (!data) {
            return callback("Aucun utilisateur avec cet id", null);
        }
        return callback(null, data);
    }).catch(e => {
        return callback({ locationError: "getUserById", error: e.message }, null);
    });
}

// const addUser = (body, callback) => {
//     let lastIdQr_code;
//     let lastIdVirtualaccount;
//     Qr_code.max('id_qr_code').then(data => {
//         Qr_code.create()
//
//
//         body.id_qr_code = !data ? 1 : data+1;
//         body.id_virtualaccount = body.id_qr_code;
//         User.create(body).then(data => {
//             return callback(null, data);
//         }).catch(e => {
//             console.log(e);
//             return callback({ locationError: "addUser", error: e.message }, null);
//         });
//     }).catch(e => {
//         console.log(e);
//         return callback({ locationError: "addUser", error: e.message }, null);
//     });
// }

const updateUser = (id, body, callback) => {
    User.update(body, {where: {id_user: id}}).then(data => {
        if (data[0] === 0) {
            return callback("Aucun utilisateur avec cet id", null);
        }
        return callback(null, "Utilisateur modifié avec succès");
    }).catch(e => {
        return callback({locationError: "updateUser", error: e.message}, null);
    });
}

const deleteUser = (id, callback) => {
    User.destroy({ where: { id_user: id } }).then(data => {
        console.log(data);
        if (data === 0) {
            return callback("Aucun utilisateur avec cet id", null);
        }
        return callback(null, data);
    }).catch(e => {
        return callback({ locationError: "deleteUser", error: e.message }, null);
    });
}

export default{
    test,
    getUsers,
    getUserById,
    // addUser,
    updateUser,
    deleteUser,
}