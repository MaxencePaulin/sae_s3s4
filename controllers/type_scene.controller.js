import model from '../models/index.js';
const TypeScene = model.TypeScene;

export const findAll = (req, res) => {
    TypeScene.findAll().then(data => {
        res.send(data);
    }).catch(e => {
        res.status(500).send({
            message: e.message || "Some error occurred."
        });
    });
}

export const findOne = (req, res) => {
    const id_type = parseInt(req.params.id);
    TypeScene.findByPk(id_type).then(data => {
        res.send(data);
    }).catch(e => {
        res.status(500).send({
            message: e.message || "Some error occurred."
        });
    });
}

export const create = (req, res) => {
    const body = req.body;
    TypeScene.create(body).then(data => {
        res.send(data);
    }).catch(e => {
        res.status(500).send({
            message: e.message || "Some error occurred."
        });
    });
}

export const update = (req, res) => {
    const id_type = parseInt(req.params.id);
    const body = req.body;
    TypeScene.update(body, {
        where: { id_typescene: id_type }
    }).then(data => {
        if (data[0] === 1) {
            res.send({
                message: "TypeScene was updated successfully."
            });
        } else {
            res.send({
                message: `Cannot update TypeScene with id_typescene=${id_type}. Maybe TypeScene was not found or req.body is empty!`
            });
        }
    }).catch(e => {
        res.status(500).send({
            message: e.message || "Some error occurred."
        });
    });
}

export const remove = (req, res) => {
    const id_type = parseInt(req.params.id);
    TypeScene.destroy({
        where: { id_typescene: id_type }
    }).then(data => {
        if (data === 1) {
            res.send({
                message: "TypeScene was deleted successfully!"
            });
        } else {
            res.send({
                message: `Cannot delete TypeScene with id_typescene=${id_type}. Maybe TypeScene was not found!`
            });
        }
    }).catch(e => {
        res.status(500).send({
            message: e.message || "Some error occurred."
        });
    });
}

export const removeAll = (req, res) => { 
    TypeScene.destroy({
        where: {},
        truncate: false
    }).then(data => {
        res.send({ message: `${data} TypeScene were deleted successfully!` });
    }).catch(e => {
        res.status(500).send({
            message: e.message || "Some error occurred."
        });
    });
}
