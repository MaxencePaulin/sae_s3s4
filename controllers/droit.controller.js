import Droit from '../models/Droit.model.js';

export const findAll = (req, res) => {
    Droit.findAll().then(data => {
        res.send(data);
    }).catch(e => {
        res.status(500).send({
            message: e.message || "Some error occurred."
        });
    });
}

export const findOne = (req, res) => {
    const id = parseInt(req.params.id);
    Droit.findByPk(id).then(data => {
        res.send(data);
    }).catch(e => {
        res.status(500).send({
            message: e.message || "Some error occurred."
        });
    });
}

export const create = (req, res) => {
    const body = req.body;
    Droit.create(body).then(data => {
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
    Droit.update(body, {
        where: { id: id }
    }).then(data => {
        if (data === 1) {
            res.send({
                message: "Droit was updated successfully."
            });
        } else {
            res.send({
                message: `Cannot update Droit with id=${id}. Maybe Droit was not found or req.body is empty!`
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
    Droit.destroy({
        where: { id: id }
    }).then(data => {
        if (data === 1) {
            res.send({
                message: "Droit was deleted successfully!"
            });
        } else {
            res.send({
                message: `Cannot delete Droit with id=${id}. Maybe Droit was not found!`
            });
        }
    }).catch(e => {
        res.status(500).send({
            message: e.message || "Some error occurred."
        });
    });
}

export const removeAll = (req, res) => {
    Droit.destroy({
        where: {},
        truncate: false
    }).then(data => {
        res.send({ message: `${data} Droit were deleted successfully!` });
    }).catch(e => {
        res.status(500).send({
            message: e.message || "Some error occurred."
        });
    });
}
