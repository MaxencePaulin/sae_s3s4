import Have from '../models/Have.model.js';

export const findAll = (req, res) => {
    Have.findAll().then(data => {
        res.send(data);
    }).catch(e => {
        res.status(500).send({
            message: e.message || "Some error occurred."
        });
    });
}

export const findOne = (req, res) => {
    const id = parseInt(req.params.id);
    Have.findByPk(id).then(data => {
        res.send(data);
    }).catch(e => {
        res.status(500).send({
            message: e.message || "Some error occurred."
        });
    });
}

export const create = (req, res) => {
    const body = req.body;
    Have.create(body).then(data => {
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
    Have.update(body, {
        where: { id: id }
    }).then(data => {
        if (data === 1) {
            res.send({
                message: "Access was updated successfully."
            });
        } else {
            res.send({
                message: `Cannot update Access with id=${id}. Maybe Access was not found or req.body is empty!`
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
    Have.destroy({
        where: { id: id }
    }).then(data => {
        if (data === 1) {
            res.send({
                message: "Access was deleted successfully!"
            });
        } else {
            res.send({
                message: `Cannot delete Access with id=${id}. Maybe Access was not found!`
            });
        }
    }).catch(e => {
        res.status(500).send({
            message: e.message || "Some error occurred."
        });
    });
}

export const removeAll = (req, res) => {
    Have.destroy({
        where: {},
        truncate: false
    }).then(data => {
        res.send({ message: `${data} Access were deleted successfully!` });
    }).catch(e => {
        res.status(500).send({
            message: e.message || "Some error occurred."
        });
    });
}
