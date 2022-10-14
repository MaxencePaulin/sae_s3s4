const usersService = require('../services/users.service');
const bcrypt = require('bcrypt');
const dotenv = require('dotenv');
const usersServices = require("../services/users.service");
const {generateTokenForUser} = require("../utils/jwtUtils");
const {pagination} = require("../utils/page");
dotenv.config();

exports.loginForm = (req, res) => {
    usersService.lireUsers((error, results) => {
        if (error) {
            return res.status(400).send({success: 0, data: error});
        }
        console.log("Success");
        res.render('login');
    });
}

exports.registerForm = (req, res) => {
    res.render('register');
};

// POST
exports.register = (req, res) => {
    const body = req.body;
    const saltRounds = 10;
    const salt = bcrypt.genSaltSync(saltRounds);
    const hash = bcrypt.hashSync(body.password, salt);
    const user = {
        firstname: body.firstname,
        lastname: body.lastname,
        username: body.username,
        password: hash,
        email: body.email
    };
    usersService.register(user, (error, results) => {
        if (error) {
            return res.status(400).send({success: 0, data: error});
        }
        return res.status(200).send({success: 1, data: results});
    });
}

exports.login = (req, res) => {
    const body = req.body;
    usersService.login(body.name, (error, results) => {
        if (error) {
            return res.status(400).send({success: 0, data: error});
        }
        const result = bcrypt.compareSync(body.password, results[0].password);
        if (result) {
            results.password = undefined;
            let token = generateTokenForUser(results[0])
            console.log(token);
            return res.status(200).send({
                success: 1,  token: token
            });
        } else {
            return res.status(401).send({success: 0, data: "Invalid email or password"});
        }
    });
}

exports.listUsers = (req, res, next) => {
    usersService.lireUsers(req, (error, results) => {
        if (error) {
            return res.status(400).send({success: 0, data: error});
        }
        console.log("Success");
        return res.status(200).send({success: 1, data: results});
    });
}

exports.listUserById = (req, res, next) => {
    usersService.lireIdUsers(req.params.id, (error, results) => {
        if (error) {
            return res.status(400).send({success: 0, data: error});
        }
        console.log("Success");
        return res.status(200).send({success: 1, data: results});
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
            return res.status(400).send({success: 0, data: error});
        }
        return res.status(200).send({success: 1, data: results});
    });
}

exports.deleteUser = (req, res) => {
    usersService.deleteUser(req.params.id, (error, results) => {
        if (error) {
            return res.status(400).send({success: 0, data: error});
        }
        return res.status(200).send({success: 1, data: results});
    });
}