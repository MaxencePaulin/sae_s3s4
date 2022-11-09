import usersService from '../services/users.service.js';
import bcrypt from 'bcrypt';
import dotenv from 'dotenv';
import { generateTokenForUser } from "../utils/jwtUtils.js";
import { pagination } from "../utils/page.js";
dotenv.config();

export const loginForm = (req, res) => {
    usersService.lireUsers((error, results) => {
        if (error) {
            return res.status(400).send({success: 0, data: error});
        }
        console.log("Success");
        let username = req.user ? req.user.username : "";
        res.render('login', {
            username: username
        });
    });
}

export const registerForm = (req, res) => {
    let username = req.user ? req.user.username : "";
    res.render('register', {
        username: username
    });
};

// POST
export const register = (req, res) => {
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

export const login = (req, res) => {
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

export const listUsers = (req, res) => {
    usersService.lireUsers(req, (error, results) => {
        if (error) {
            return res.status(400).send({success: 0, data: error});
        }
        console.log("Success");
        return res.status(200).send({success: 1, data: results});
    });
}

export const listUserById = (req, res) => {
    usersService.lireIdUsers(req.params.id, (error, results) => {
        if (error) {
            return res.status(400).send({success: 0, data: error});
        }
        console.log("Success");
        return res.status(200).send({success: 1, data: results});
    });
}

export const updateUser = (req, res) => {
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

export const deleteUser = (req, res) => {
    usersService.deleteUser(req.params.id, (error, results) => {
        if (error) {
            return res.status(400).send({success: 0, data: error});
        }
        return res.status(200).send({success: 1, data: results});
    });
}

export default {
    loginForm: loginForm,
    registerForm: loginForm,
    register: register,
    login: login,
    listUsers: listUsers,
    listUserById: listUserById,
    updateUser: updateUser,
    deleteUser: deleteUser
}