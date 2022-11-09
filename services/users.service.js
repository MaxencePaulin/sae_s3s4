// Users service
import fs from "fs";
import dotenv from "dotenv";
import { User } from "../models/users.model.js";
dotenv.config();
const users = JSON.parse(fs.readFileSync("data/users.json", "utf8"));

const saveUsers = (users) => {
    const dataJSON = JSON.stringify(users);
    fs.writeFileSync("data/users.json", dataJSON);
}

const lireUsers = (callback) => {
    try {
        const result = users;
        if (result.length === 0) {
            return callback(`No users found`, null);
        }
        return callback(null, result);
    } catch (e) {
        console.log("error");
        console.log(e);
        return callback([], null);
    }
}

// login
const login = (name, callback) => {
    try {
        const usersL = users;
        const result = [];
        usersL.forEach((user) => {
            if (user.email === name || user.username === name) {
                result.push(user);
            }
        });
        if (result.length === 0) {
            return callback(`No user found for email or this username : ${name}`, null);
        }
        return callback(null, result);
    } catch (e) {
        console.log("error login");
        console.log(e);
        return callback([], null);
    }
}

// register en utilisant le model user
const register = (user, callback) => {
    try {
        const usersL = users;
        const result = new User(
            (usersL.length + 1).toString(),
            user.firstname,
            user.lastname,
            user.username,
            user.email,
            user.password,
            "user",
            false,
            false
        );
        usersL.push(JSON.parse(result.JSON));
        saveUsers(usersL);
        return callback(null, user);
    } catch (e) {
        console.log("error register");
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

export default {
    lireUsers: lireUsers,
    lireIdUsers: lireIdUsers,
    saveUsers: saveUsers,
    login: login,
    register: register
};