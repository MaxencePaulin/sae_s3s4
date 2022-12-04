import model from '../models/index.js';
const Role = model.Role;

export const findAll = (req, res) => {
    Role.findAll().then(data => {
        res.send(data);
    }).catch(e => {
        res.status(500).send({
            message: e.message || "Some error occurred."
        });
    });
}

export const findOne = (req, res) => {
    const id = parseInt(req.params.id);
    Role.findByPk(id).then(data => {
        res.send(data);
    }).catch(e => {
        res.status(500).send({
            message: e.message || "Some error occurred."
        });
    });
}

export const create = (req, res) => {
    const body = req.body;
    Role.create(body).then(data => {
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
    Role.update(body, {
        where: { id_role: id }
    }).then(data => {
        if (data[0] === 1) {
            res.send({
                message: "Role was updated successfully."
            });
        } else {
            res.send({
                message: `Cannot update Role with id=${id}. Maybe Role was not found or req.body is empty!`
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
    Role.destroy({
        where: { id_role: id }
    }).then(data => {
        if (data === 1) {
            res.send({
                message: "Role was deleted successfully!"
            });
        } else {
            res.send({
                message: `Cannot delete Role with id=${id}. Maybe Role was not found!`
            });
        }
    }).catch(e => {
        res.status(500).send({
            message: e.message || "Some error occurred."
        });
    });
}

export const removeAll = (req, res) => {
    Role.destroy({
        where: {},
        truncate: false
    }).then(data => {
        res.send({ message: `${data} Role were deleted successfully!` });
    }).catch(e => {
        res.status(500).send({
            message: e.message || "Some error occurred."
        });
    });
}
