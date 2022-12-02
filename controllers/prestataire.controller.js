import model from '../models/index.js';
const Prestataire = model.Prestataire;

export const findAll = (req, res) => {
    Prestataire.findAll().then(data => {
        res.send(data);
    }).catch(e => {
        res.status(500).send({
            message: e.message || "Some error occurred."
        });
    });
}

export const findOne = (req, res) => {
    const id = parseInt(req.params.id);
    Prestataire.findByPk(id).then(data => {
        res.send(data);
    }).catch(e => {
        res.status(500).send({
            message: e.message || "Some error occurred."
        });
    });
}

export const create = (req, res) => {
    const body = req.body;
    Prestataire.create(body).then(data => {
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
    Prestataire.update(body, {
        where: { id_prestataire: id }
    }).then(data => {
        if (data === 1) {
            res.send({
                message: "Prestataire was updated successfully."
            });
        } else {
            res.send({
                message: `Cannot update Prestataire with id=${id}. Maybe Prestataire was not found or req.body is empty!`
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
    Prestataire.destroy({
        where: { id: id }
    }).then(data => {
        if (data === 1) {
            res.send({
                message: "Prestataire was deleted successfully!"
            });
        } else {
            res.send({
                message: `Cannot delete Prestataire with id=${id}. Maybe Prestataire was not found!`
            });
        }
    }).catch(e => {
        res.status(500).send({
            message: e.message || "Some error occurred."
        });
    });
}

export const removeAll = (req, res) => {
    Prestataire.destroy({
        where: {},
        truncate: false
    }).then(data => {
        res.send({ message: `${data} Prestataire were deleted successfully!` });
    }).catch(e => {
        res.status(500).send({
            message: e.message || "Some error occurred."
        });
    });
}
