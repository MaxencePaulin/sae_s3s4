// Users service
const fs = require("fs");
const dotenv = require("dotenv");
dotenv.config();
const datasource = process.env.DATASOURCE;
const users = JSON.parse(fs.readFileSync("data/users.json", "utf8"));

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

const lireUsers = (req, callback) => {
    try {
        const result = users;
        if (result.length === 0) {
            return callback(`No users found`, null);
        }
        const finalResult = pagination(req, result);
        if (finalResult.length === 0) {
            return callback(`No users found for page ${req.query.page}`, null);
        }
        return callback(null, finalResult);
    } catch (e) {
        console.log("error");
        console.log(e);
        return callback([], null);
    }
}

const lireIdUsers = (id, callback) => {
    try {
        const usersL = users;
        const result = [];
        usersL.forEach((user) => {
            if (user.id == id) {
                result.push(user);
            }
        });
        if (result.length === 0) {
            return callback(`No user found for id ${id}`, null);
        }
        return callback(null, result);
    } catch (e) {
        console.log("error");
        console.log(e);
        return callback([], null);
    }
}

const saveUsers = (users) => {
    const dataJSON = JSON.stringify(users);
    fs.writeFileSync(datasource + "users.json", dataJSON);
}

module.exports = {
    lireUsers: lireUsers,
    lireIdUsers: lireIdUsers,
    saveUsers: saveUsers
}





