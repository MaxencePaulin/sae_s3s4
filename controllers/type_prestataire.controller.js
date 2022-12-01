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
    const id_typeprestataire = parseInt(req.params.id_typeprestataire);
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
    const id_typeprestataire = parseInt(req.params.id_typeprestataire);
    const body = req.body;
    TypePrestataire.update(body, {
        where: { id_typeprestataire: id_typeprestataire }
    }).then(data => {
        if (data === 1) {
            res.send({
                message: "Proposes was updated successfully."
            });
        } else {
            res.send({
                message: `Cannot update Proposes with id_typeprestataire=${id_typeprestataire}. Maybe Proposes was not found or req.body is empty!`
            });
        }
    }).catch(e => {
        res.status(500).send({
            message: e.message || "Some error occurred."
        });
    });
}

export const remove = (req, res) => {
    const id_typeprestataire = parseInt(req.params.id_typeprestataire);
    TypePrestataire.destroy({
        where: { id_typeprestataire: id_typeprestataire }
    }).then(data => {
        if (data === 1) {
            res.send({
                message: "Proposes was deleted successfully!"
            });
        } else {
            res.send({
                message: `Cannot delete Proposes with id_typeprestataire=${id_typeprestataire}. Maybe Proposes was not found!`
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
        res.send({ message: `${data} Proposes were deleted successfully!` });
    }).catch(e => {
        res.status(500).send({
            message: e.message || "Some error occurred."
        });
    });
}
