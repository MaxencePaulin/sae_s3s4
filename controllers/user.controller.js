import userServices from '../services/user.service.js';

const test = (req, res) => {
    userServices.test((error, results) => {
        if (error) {
            return res.status(400).send({ success: 0, data: error });
        }
        const tokenDecode = req.user;
        return res.status(200).send({ success: 1, data: [results, tokenDecode] });
    });
}

const getUsers = (req, res) => {
    userServices.getUsers((error, results) => {
        if (error) {
            return res.status(400).send({ success: 0, data: error });
        }
        return res.status(200).send({ success: 1, data: results });
    });
}

const getUserById = (req, res) => {
    const id = parseInt(req.params.id);
    userServices.getUserById(id, (error, results) => {
        if (error) {
            return res.status(400).send({ success: 0, data: error });
        }
        return res.status(200).send({ success: 1, data: results });
    });
}

const addUser = (req, res) => {
    const body = req.body;
    userServices.addUser(body, (error, results) => {
        if (error) {
            return res.status(400).send({ success: 0, data: error });
        }
        return res.status(200).send({ success: 1, data: results });
    });
}

const updateUser = (req, res) => {
    const id = parseInt(req.params.id);
    const body = req.body;
    userServices.updateUser(id, body, (error, results) => {
        if (error) {
            return res.status(400).send({ success: 0, data: error });
        }
        return res.status(200).send({ success: 1, data: results });
    });
}

const deleteUser = (req, res) => {
    const id = parseInt(req.params.id);
    userServices.deleteUser(id, (error, results) => {
        if (error) {
            return res.status(400).send({ success: 0, data: error });
        }
        return res.status(200).send({ success: 1, data: results });
    });
}

export default {
    test,
    getUsers,
    getUserById,
    addUser,
    updateUser,
    deleteUser,
}