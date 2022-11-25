import Make from '../models/Make.model.js';

export const findAll = (req, res) => {
    Make.findAll().then(data => {
        res.send(data);
    }).catch(e => {
        res.status(500).send({
            message: e.message || "Some error occurred."
        });
    });
}

export const findOne = (req, res) => {
    const id = parseInt(req.params.id);
    Make.findByPk(id).then(data => {
        res.send(data);
    }).catch(e => {
        res.status(500).send({
            message: e.message || "Some error occurred."
        });
    });
}

export const create = (req, res) => {
    const body = req.body;
    Make.create(body).then(data => {
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
    Make.update(body, {
        where: { id: id }
    }).then(data => {
        if (data === 1) {
            res.send({
                message: "Make was updated successfully."
            });
        } else {
            res.send({
                message: `Cannot update Make with id=${id}. Maybe Make was not found or req.body is empty!`
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
    Make.destroy({
        where: { id: id }
    }).then(data => {
        if (data === 1) {
            res.send({
                message: "Make was deleted successfully!"
            });
        } else {
            res.send({
                message: `Cannot delete Make with id=${id}. Maybe Make was not found!`
            });
        }
    }).catch(e => {
        res.status(500).send({
            message: e.message || "Some error occurred."
        });
    });
}

export const removeAll = (req, res) => {
    Make.destroy({
        where: {},
        truncate: false
    }).then(data => {
        res.send({ message: `${data} Make were deleted successfully!` });
    }).catch(e => {
        res.status(500).send({
            message: e.message || "Some error occurred."
        });
    });
}
