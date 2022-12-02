import model from '../models/index.js';
const Users = model.Users;

export const findAll = (req, res) => {
    Users.findAll().then(data => {
        res.send(data);
    }).catch(e => {
        res.status(500).send({
            message: e.message || "Some error occurred."
        });
    });
}

export const findOne = (req, res) => {
    const id = parseInt(req.params.id);
    Users.findByPk(id).then(data => {
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
        if (data === 1) {
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
