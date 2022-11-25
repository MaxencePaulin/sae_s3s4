import Date_validity_ticket from '../models/Date_validity_ticket.model.js';

export const findAll = (req, res) => {
    Date_validity_ticket.findAll().then(data => {
        res.send(data);
    }).catch(e => {
        res.status(500).send({
            message: e.message || "Some error occurred."
        });
    });
}

export const findOne = (req, res) => {
    const id = parseInt(req.params.id);
    Date_validity_ticket.findByPk(id).then(data => {
        res.send(data);
    }).catch(e => {
        res.status(500).send({
            message: e.message || "Some error occurred."
        });
    });
}

export const create = (req, res) => {
    const body = req.body;
    Date_validity_ticket.create(body).then(data => {
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
    Date_validity_ticket.update(body, {
        where: { id: id }
    }).then(data => {
        if (data === 1) {
            res.send({
                message: "Date_validity_ticket was updated successfully."
            });
        } else {
            res.send({
                message: `Cannot update Date_validity_ticket with id=${id}. Maybe Date_validity_ticket was not found or req.body is empty!`
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
    Date_validity_ticket.destroy({
        where: { id: id }
    }).then(data => {
        if (data === 1) {
            res.send({
                message: "Date_validity_ticket was deleted successfully!"
            });
        } else {
            res.send({
                message: `Cannot delete Date_validity_ticket with id=${id}. Maybe Date_validity_ticket was not found!`
            });
        }
    }).catch(e => {
        res.status(500).send({
            message: e.message || "Some error occurred."
        });
    });
}

export const removeAll = (req, res) => {
    Date_validity_ticket.destroy({
        where: {},
        truncate: false
    }).then(data => {
        res.send({ message: `${data} Date_validity_ticket were deleted successfully!` });
    }).catch(e => {
        res.status(500).send({
            message: e.message || "Some error occurred."
        });
    });
}
