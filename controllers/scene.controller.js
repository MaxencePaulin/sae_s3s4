import model from '../models/index.js';
const Scene = model.Scene;

export const findAll = (req, res) => {
    Scene.findAll().then(data => {
        res.send(data);
    }).catch(e => {
        res.status(500).send({
            message: e.message || "Some error occurred."
        });
    });
}

export const findOne = (req, res) => {
    const id = parseInt(req.params.id);
    Scene.findByPk(id).then(data => {
        res.send(data);
    }).catch(e => {
        res.status(500).send({
            message: e.message || "Some error occurred."
        });
    });
}

export const create = (req, res) => {
    const body = req.body;
    Scene.create(body).then(data => {
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
    Scene.update(body, {
        where: { id_scene: id }
    }).then(data => {
        if (data === 1) {
            res.send({
                message: "Scene was updated successfully."
            });
        } else {
            res.send({
                message: `Cannot update Scene with id=${id}. Maybe Scene was not found or req.body is empty!`
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
    Scene.destroy({
        where: { id_scene: id }
    }).then(data => {
        if (data === 1) {
            res.send({
                message: "Proposes was deleted successfully!"
            });
        } else {
            res.send({
                message: `Cannot delete Scene with id=${id}. Maybe Scene was not found!`
            });
        }
    }).catch(e => {
        res.status(500).send({
            message: e.message || "Some error occurred."
        });
    });
}

export const removeAll = (req, res) => {
    Scene.destroy({
        where: {},
        truncate: false
    }).then(data => {
        res.send({ message: `${data} Scene were deleted successfully!` });
    }).catch(e => {
        res.status(500).send({
            message: e.message || "Some error occurred."
        });
    });
}
