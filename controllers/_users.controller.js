import model from '../models/index.js';
const Users = model.Users;

export const findAll = (req, res) => {
    Users.findAll({include: [{model: model.Role},
            {model: model.VirtualAccount, include: [{model: model.Qr_code}]},
            {model: model.Prestataire}]}).then(data => {
        res.send(data);
    }).catch(e => {
        res.status(500).send({
            message: e.message || "Some error occurred."
        });
    });
}

export const findOne = (req, res) => {
    const id = parseInt(req.params.id);
    Users.findByPk(id, {include: [{model: model.Role},
            {model: model.VirtualAccount, include: [{model: model.Qr_code}]},
            {model: model.Prestataire}]}).then(data => {
        res.send(data);
    }).catch(e => {
        res.status(500).send({
            message: e.message || "Some error occurred."
        });
    });
}

export const create = (req, res) => {
    const body = req.body;
    Users.create(body).then(data => {
        res.send(data);
    }).catch(e => {
        res.status(500).send({
            message: e.message || "Some error occurred."
        });
    });
}

export const update = (req, res) => {
    const id = parseInt(req.params.id);
    const body = req.body;
    Users.update(body, {
        where: { id_user: id }
    }).then(data => {
        if (data[0] === 1) {
            res.send({
                message: "Users was updated successfully."
            });
        } else {
            res.send({
                message: `Cannot update Users with id=${id}. Maybe Users was not found or req.body is empty!`
            });
        }
    }).catch(e => {
        res.status(500).send({
            message: e.message || "Some error occurred."
        });
    });
}

export const remove = (req, res) => {
    const id = parseInt(req.params.id);
    Users.destroy({
        where: { id_user: id }
    }).then(data => {
        console.log(data);
        if (data === 1) {
            res.send({
                message: "Users was deleted successfully!"
            });
        } else {
            res.send({
                message: `Cannot delete Users with id=${id}. Maybe Users was not found!`
            });
        }
    }).catch(e => {
        res.status(500).send({
            message: e.message || "Some error occurred."
        });
    });
}

export const removeAll = (req, res) => {
    Users.destroy({
        where: {},
        truncate: false
    }).then(data => {
        res.send({ message: `${data} Users were deleted successfully!` });
    }).catch(e => {
        res.status(500).send({
            message: e.message || "Some error occurred."
        });
    });
}

export const login = (req, res) => {
    const login = req.body.login;
    const password = req.body.password;
    Users.findOne({
        where: { login: login },
        include: [{model: model.Role}]
    }).then(data => {
        if (data && data.password === password) {
            req.session.id_user = data.id_user;
            req.session.login = data.login;
            req.session.id_role = data.id_role;
            req.session.libelle_role = data.role.libelle_role;
            console.log(req.session);
            res.send({success: 1, data: data});
        } else {
            res.status(405).send({
                success: 0, message: "Error with the connection with id " + login
            });
        }
    }).catch(e => {
        console.log(e);
        res.status(500).send({
            success: 0, message: "Error with the connection with id " + login
        });
    });
}

export const register = async (req, res) => {
    const id_role = parseInt(req.body.id_role) || 1;
    const id_qr_code = await model.Qr_code.create({
        qr_code: "waiting..."
    });
    const id_virtualaccount = await model.VirtualAccount.create({
        id_qr_code: id_qr_code.id_qr_code,
    });
    if (req.body.dob === '') {
        req.body.dob = null;
    }
    const data = {
        login: req.body.login,
        password: req.body.password,
        email: req.body.email,
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        dob: req.body.dob,
        address: req.body.address,
        mobile: req.body.mobile,
        genre: req.body.genre,
        id_role: id_role,
        id_virtualaccount: id_virtualaccount.id_virtualaccount,
    }
    Users.create(data).then(data => {
        console.log(data);
        model.Qr_code.update(
            {qr_code: `userid=${data.id_user}`},
            {where: {id_qr_code: id_virtualaccount.id_qr_code},
            }).then(data => {
            res.send({success: 1, data: data});
        }).catch(e => {
            console.log(e);
            res.status(500).send({
                message: e.message || "Some error occurred."
            });
        })
    }).catch(e => {
        console.log(e);
        res.status(500).send({
            message: e.message || "Some error occurred."
        });
    });
}

export const logout = (req, res) => {
    try {
        console.log(req.session);
        req.session.destroy();
        console.log(req.session);
        res.send({success: 1});
    }catch(e) {
        console.log(e);
        res.status(500).send({
            success: 0,
            message: e.message || "Some error occurred."
        });
    }
}
