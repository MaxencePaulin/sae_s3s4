import model from '../models/index.js';
const Nationality = model.Nationality;

export const findAll = (req, res) => {
    Nationality.findAll().then(data => {
        res.send(data);
    }).catch(e => {
        res.status(500).send({
            message: e.message || "Some error occurred."
        });
    });
}

export const findOne = (req, res) => {
    const id = parseInt(req.params.id);
    Nationality.findByPk(id).then(data => {
        res.send(data);
    }).catch(e => {
        res.status(500).send({
            message: e.message || "Some error occurred."
        });
    });
}

export const create = (req, res) => {
    const body = req.body;
    Nationality.create(body).then(data => {
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
    Nationality.update(body, {
        where: { id_nationality: id }
    }).then(data => {
        if (data === 1) {
            res.send({
                message: "Nationality was updated successfully."
            });
        } else {
            res.send({
                message: `Cannot update Nationality with id=${id}. Maybe Nationality was not found or req.body is empty!`
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
    Nationality.destroy({
        where: { id_nationality: id }
    }).then(data => {
        if (data === 1) {
            res.send({
                message: "Nationality was deleted successfully!"
            });
        } else {
            res.send({
                message: `Cannot delete Nationality with id=${id}. Maybe Nationality was not found!`
            });
        }
    }).catch(e => {
        res.status(500).send({
            message: e.message || "Some error occurred."
        });
    });
}

export const removeAll = (req, res) => {
    Nationality.destroy({
        where: {},
        truncate: false
    }).then(data => {
        res.send({ message: `${data} Nationality were deleted successfully!` });
    }).catch(e => {
        res.status(500).send({
            message: e.message || "Some error occurred."
        });
    });
}
