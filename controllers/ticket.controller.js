import model from '../models/index.js';
const Ticket = model.Ticket;

export const findAll = (req, res) => {
    Ticket.findAll().then(data => {
        res.send(data);
    }).catch(e => {
        res.status(500).send({
            message: e.message || "Some error occurred."
        });
    });
}

export const findOne = (req, res) => {
    const id = parseInt(req.params.id);
    Ticket.findByPk(id).then(data => {
        res.send(data);
    }).catch(e => {
        res.status(500).send({
            message: e.message || "Some error occurred."
        });
    });
}

export const create = (req, res) => {
    const body = req.body;
    Ticket.create(body).then(data => {
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
    Ticket.update(body, {
        where: { id_ticket: id }
    }).then(data => {
        if (data === 1) {
            res.send({
                message: "Ticket was updated successfully."
            });
        } else {
            res.send({
                message: `Cannot update Ticket with id=${id}. Maybe Ticket was not found or req.body is empty!`
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
    Ticket.destroy({
        where: { id: id }
    }).then(data => {
        if (data === 1) {
            res.send({
                message: "Ticket was deleted successfully!"
            });
        } else {
            res.send({
                message: `Cannot delete Ticket with id=${id}. Maybe Ticket was not found!`
            });
        }
    }).catch(e => {
        res.status(500).send({
            message: e.message || "Some error occurred."
        });
    });
}

export const removeAll = (req, res) => {
    Ticket.destroy({
        where: {},
        truncate: false
    }).then(data => {
        res.send({ message: `${data} Ticket were deleted successfully!` });
    }).catch(e => {
        res.status(500).send({
            message: e.message || "Some error occurred."
        });
    });
}
