import model from '../models/index.js';
const TypePrestataire = model.TypePrestataire;

export const findAll = (req, res) => {
    TypePrestataire.findAll().then(data => {
        res.send(data);
    }).catch(e => {
        res.status(500).send({
            message: e.message || "Some error occurred."
        });
    });
}

export const findOne = (req, res) => {
    const id_typeprestataire = parseInt(req.params.id);
    TypePrestataire.findByPk(id_typeprestataire).then(data => {
        res.send(data);
    }).catch(e => {
        res.status(500).send({
            message: e.message || "Some error occurred."
        });
    });
}

export const create = (req, res) => {
    const body = req.body;
    TypePrestataire.create(body).then(data => {
        res.send(data);
    }).catch(e => {
        res.status(500).send({
            message: e.message || "Some error occurred."
        });
    });
}

export const update = (req, res) => {
    const id_typeprestataire = parseInt(req.params.id);
    const body = req.body;
    TypePrestataire.update(body, {
        where: { id_typeprestataire: id_typeprestataire }
    }).then(data => {
        if (data === 1) {
            res.send({
                message: "TypePrestataire was updated successfully."
            });
        } else {
            res.send({
                message: `Cannot update TypePrestataire with id_typeprestataire=${id_typeprestataire}. Maybe TypePrestataire was not found or req.body is empty!`
            });
        }
    }).catch(e => {
        res.status(500).send({
            message: e.message || "Some error occurred."
        });
    });
}

export const remove = (req, res) => {
    const id_typeprestataire = parseInt(req.params.id);
    TypePrestataire.destroy({
        where: { id_typeprestataire: id_typeprestataire }
    }).then(data => {
        if (data === 1) {
            res.send({
                message: "TypePrestataire was deleted successfully!"
            });
        } else {
            res.send({
                message: `Cannot delete TypePrestataire with id_typeprestataire=${id_typeprestataire}. Maybe TypePrestataire was not found!`
            });
        }
    }).catch(e => {
        res.status(500).send({
            message: e.message || "Some error occurred."
        });
    });
}

export const removeAll = (req, res) => {
    TypePrestataire.destroy({
        where: {},
        truncate: false
    }).then(data => {
        res.send({ message: `${data} TypePrestataire were deleted successfully!` });
    }).catch(e => {
        res.status(500).send({
            message: e.message || "Some error occurred."
        });
    });
}
