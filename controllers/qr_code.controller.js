import model from '../models/index.js';
const Qr_code = model.Qr_code;

export const findAll = (req, res) => {
    Qr_code.findAll().then(data => {
        res.send(data);
    }).catch(e => {
        res.status(500).send({
            message: e.message || "Some error occurred."
        });
    });
}

export const findOne = (req, res) => {
    const id = parseInt(req.params.id);
    Qr_code.findByPk(id).then(data => {
        res.send(data);
    }).catch(e => {
        res.status(500).send({
            message: e.message || "Some error occurred."
        });
    });
}

export const create = (req, res) => {
    const body = req.body;
    Qr_code.create(body).then(data => {
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
    Qr_code.update(body, {
        where: { id_qr_code: id }
    }).then(data => {
        if (data === 1) {
            res.send({
                message: "Qr_code was updated successfully."
            });
        } else {
            res.send({
                message: `Cannot update Qr_code with id_qr_code=${id}. Maybe Qr_code was not found or req.body is empty!`
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
    Qr_code.destroy({
        where: { id: id }
    }).then(data => {
        if (data === 1) {
            res.send({
                message: "Qr_code was deleted successfully!"
            });
        } else {
            res.send({
                message: `Cannot delete Qr_code with id_qr_code=${id}. Maybe Qr_code was not found!`
            });
        }
    }).catch(e => {
        res.status(500).send({
            message: e.message || "Some error occurred."
        });
    });
}

export const removeAll = (req, res) => {
    Qr_code.destroy({
        where: {},
        truncate: false
    }).then(data => {
        res.send({ message: `${data} Qr_code were deleted successfully!` });
    }).catch(e => {
        res.status(500).send({
            message: e.message || "Some error occurred."
        });
    });
}
