import model from '../models/index.js';
const Users = model.Users;
import bcrypt from 'bcrypt';
import { generateTokenForUser } from "../utils/jwtUtils.js";
// import { Model, where } from 'sequelize';
import {Op, where} from 'sequelize'

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
        res.status(200).send(data);
    }).catch(e => {
        res.status(500).send({
            message: e.message || "Some error occurred."
        });
    });
}

export const create = (req, res) => {
    const body = req.body;
    const salt = bcrypt.genSaltSync(10);
    body.password = bcrypt.hashSync(body.password, salt);
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
    if (body.password && body.password !== '') {
        const salt = bcrypt.genSaltSync(10);
        body.password = bcrypt.hashSync(body.password, salt);
    }
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

export const getUserProfile = async (req, res) => {
    const user = await Users.findByPk(req.user.id_user,  {include: [{model: model.Role},
            {model: model.VirtualAccount, include: [{model: model.Qr_code}]},
            {model: model.Prestataire}]});

    if (user) {
        res.send({success: 1, data: {
                id_user: user.id_user,
                login: user.login,
                email: user.email,
                firstname: user.firstname,
                lastname: user.lastname,
                dob: user.dob,
                address: user.address,
                mobile: user.mobile,
                genre: user.genre,
                id_role: user.id_role,
                libelle_role: user.role.libelle_role,
            }
        })
    } else {
        res.status(404).send({ success: 0, message: 'User Not Found' });
    }
}

export const login = (req, res) => {
    const login = req.body.login;
    const password = req.body.password;
    if (login === '' || password === '') {
        return res.status(400).send({ success: 0, message: 'Missing parameters' });
    }
    Users.findOne({
        where: { login: login },
        include: [{model: model.Role}]
    }).then(data => {
        if (data && bcrypt.compareSync(password, data.password)) {
            const token = generateTokenForUser(data);
            req.session.token = token;
            // req.session.id_user = data.id_user;
            // req.session.login = data.login;
            // req.session.id_role = data.id_role;
            // req.session.libelle_role = data.role.libelle_role;
            console.log(req.session);
            res.send({success: 1, data: {token:token}});
        } else {
            res.status(405).send({
                success: 0, message: "Error with the connection, please check your login and password"
            });
        }
    }).catch(e => {
        console.log(e);
        res.status(500).send({
            success: 0, message: "Error with the connection, please check your login and password"
        });
    });
}

export const register = async (req, res) => {
    const salt = bcrypt.genSaltSync(10);
    req.body.password = bcrypt.hashSync(req.body.password, salt);
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


export const userWhoReservedEmplacement = async (req, res) => {
    let result =await  model.Reserve.findAll({include :[{model: model.Date_reserve}]})
    let id_user_in_reserve= []
    for (const ele of result) {
        id_user_in_reserve.push(ele.id_user)
    }
    let find_in = await model.Bought.findAll({where:{id_user:{[Op.in]:id_user_in_reserve}}} , {include: [{model: model.Users}]})
    let user_info=[]
    for (const ele_bis of find_in) {
        user_info.push(ele_bis.id_user)
    }
    let ma_list_final=[]
    let all_users_ok = model.Users.findAll({where:{id_user:{[Op.in]:user_info}}})
    console.log(JSON.stringify(all_users_ok) , "fgcbskjbldsjkhdjskjsd")
    for (const ite of all_users_ok) {
        ma_list_final.push({id_user: ite.id_user ,
            firstname : ite.firstname ,
            lastname : ite.lastname , 
            genre : ite.user.genre 
        }) 
    }
    res.status(500).send(ma_list_final)
    // }
}
