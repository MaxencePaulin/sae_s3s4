import model from '../models/index.js';
const VirtualAccount = model.VirtualAccount;

export const findAll = (req, res) => {
    VirtualAccount.findAll({include: [{model: model.Qr_code}]}).then(data => {
        res.send(data);
    }).catch(e => {
        res.status(500).send({
            message: e.message || "Some error occurred."
        });
    });
}

export const findOne = (req, res) => {
    const id = parseInt(req.params.id);
    VirtualAccount.findByPk(id, {include: [{model: model.Qr_code}]}).then(data => {
        res.send(data);
    }).catch(e => {
        res.status(500).send({
            message: e.message || "Some error occurred."
        });
    });
}

export const create = (req, res) => {
    const body = req.body;
    VirtualAccount.create(body).then(data => {
        res.send(data);
    }).catch(e => {
        res.status(500).send({
            message: e.message || "Some error occurred."
        });
    });
}

export const update = (req, res) => {
    const id_account = parseInt(req.params.id);
    const body = req.body;
    VirtualAccount.update(body, {
        where: { id_virtualaccount: id_account }
    }).then(data => {
        if (data === 1) {
            res.send({
                message: "VirtualAccount was updated successfully."
            });
        } else {
            res.send({
                message: `Cannot update VirtualAccount with id=${id_account}. Maybe VirtualAccount was not found or req.body is empty!`
            });
        }
    }).catch(e => {
        res.status(500).send({
            message: e.message || "Some error occurred."
        });
    });
}

export const remove = (req, res) => {
    const id_account = parseInt(req.params.id_virtualaccount);
    VirtualAccount.destroy({
        where: { id_virtualaccount: id_account }
    }).then(data => {
        if (data === 1) {
            res.send({
                message: "VirtualAccount was deleted successfully!"
            });
        } else {
            res.send({
                message: `Cannot delete VirtualAccount with id_virtualaccount=${id_account}. Maybe VirtualAccount was not found!`
            });
        }
    }).catch(e => {
        res.status(500).send({
            message: e.message || "Some error occurred."
        });
    });
}

export const removeAll = (req, res) => {
    VirtualAccount.destroy({
        where: {},
        truncate: false
    }).then(data => {
        res.send({ message: `${data} VirtualAccount were deleted successfully!` });
    }).catch(e => {
        res.status(500).send({
            message: e.message || "Some error occurred."
        });
    });
}
