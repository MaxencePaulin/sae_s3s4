import model from '../models/index.js';
const Service = model.Service;

export const findAll = (req, res) => {
    Service.findAll().then(data => {
        res.send(data);
    }).catch(e => {
        res.status(500).send({
            message: e.message || "Some error occurred."
        });
    });
}

export const findOne = (req, res) => {
    const id = parseInt(req.params.id);
    Service.findByPk(id).then(data => {
        res.send(data);
    }).catch(e => {
        res.status(500).send({
            message: e.message || "Some error occurred."
        });
    });
}

export const create = (req, res) => {
    const body = req.body;
    Service.create(body).then(data => {
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
    Service.update(body, {
        where: { id_service: id }
    }).then(data => {
        if (data[0] === 1) {
            res.send({
                message: "Service was updated successfully."
            });
        } else {
            res.send({
                message: `Cannot update Service with id=${id}. Maybe Service was not found or req.body is empty!`
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
    Service.destroy({
        where: { id_service: id }
    }).then(data => {
        if (data === 1) {
            res.send({
                message: "Service was deleted successfully!"
            });
        } else {
            res.send({
                message: `Cannot delete Service with id=${id}. Maybe Service was not found!`
            });
        }
    }).catch(e => {
        res.status(500).send({
            message: e.message || "Some error occurred."
        });
    });
}

export const removeAll = (req, res) => {
    Service.destroy({
        where: {},
        truncate: false
    }).then(data => {
        res.send({ message: `${data} Service were deleted successfully!` });
    }).catch(e => {
        res.status(500).send({
            message: e.message || "Some error occurred."
        });
    });
}
