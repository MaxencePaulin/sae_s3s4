import model from '../models/index.js';
const VirtualAccount = model.VirtualAccount;

export const findAll = (req, res) => {
    VirtualAccount.findAll().then(data => {
        res.send(data);
    }).catch(e => {
        res.status(500).send({
            message: e.message || "Some error occurred."
        });
    });
}

export const findOne = (req, res) => {
    const id_account = parseInt(req.params.id_virtualaccount);
    VirtualAccount.findByPk(id_account).then(data => {
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
                message: "Proposes was updated successfully."
            });
        } else {
            res.send({
                message: `Cannot update Proposes with id=${id_account}. Maybe Proposes was not found or req.body is empty!`
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
                message: "Proposes was deleted successfully!"
            });
        } else {
            res.send({
                message: `Cannot delete Proposes with id_virtualaccount=${id_account}. Maybe Proposes was not found!`
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
        res.send({ message: `${data} Proposes were deleted successfully!` });
    }).catch(e => {
        res.status(500).send({
            message: e.message || "Some error occurred."
        });
    });
}
