const usersService = require('../services/users.service');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

exports.loginForm = (req, res) => {
    res.render('login');
}

// POST
exports.register = (req, res) => {
    const body = req.body;
    const saltRounds = 10;
    const salt = bcrypt.genSaltSync(saltRounds);
    const hash = bcrypt.hashSync(body.password, salt);
    const user = {
        username: body.username,
        password: hash,
        email: body.email
    };
    usersService.register(user, (error, results) => {
        if (error) {
            return res.status(400).send({ success: 0, data: error });
        }
        return res.status(200).send({ success: 1, data: results });
    });
}

exports.login = (req, res) => {
    const body = req.body;
    usersService.login(body.email, (error, results) => {
        if (error) {
            return res.status(400).send({ success: 0, data: error });
        }
        if (!results) {
            return res.status(401).send({ success: 0, data: "Invalid email or password" });
        }
        const result = bcrypt.compareSync(body.password, results.password);
        if (result) {
            results.password = undefined;
            const jsontoken = sign({ result: results }, process.env.JWT_KEY, {
                expiresIn: "1h"
            });
            return res.status(200).send({ success: 1, data: jsontoken });
        } else {
            return res.status(401).send({ success: 0, data: "Invalid email or password" });
        }
    });
}

exports.listUsers = (req, res, next) => {
    usersService.lireUsers(req, (error, results) => {
        if (error) {
            return res.status(400).send({ success: 0, data: error });
        }
        console.log("Success");
        return res.status(200).send({ success: 1, data: results });
    });
}

exports.listUserById = (req, res, next) => {
    usersService.lireIdUsers(req.params.id, (error, results) => {
        if (error) {
            return res.status(400).send({ success: 0, data: error });
        }
        console.log("Success");
        return res.status(200).send({ success: 1, data: results});
    });
}

exports.updateUser = (req, res) => {
    const body = req.body;
    const saltRounds = 10;
    const salt = bcrypt.genSaltSync(saltRounds);
    const hash = bcrypt.hashSync(body.password, salt);
    const user = {
        username: body.username,
        password: hash,
        email: body.email
    };
    usersService.updateUser(req.params.id, user, (error, results) => {
        if (error) {
            return res.status(400).send({ success: 0, data: error });
        }
        return res.status(200).send({ success: 1, data: results });
    });
}

exports.deleteUser = (req, res) => {
    usersService.deleteUser(req.params.id, (error, results) => {
        if (error) {
            return res.status(400).send({ success: 0, data: error });
        }
        return res.status(200).send({ success: 1, data: results });
    });
}