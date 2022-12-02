import model from '../models/index.js';
const Date_validity_ticket = model.Date_validity_ticket;

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
    const date_start_validity = req.query.date_start_validity;
    const date_end_validity = req.query.date_end_validity;
    Date_validity_ticket.findOne({where: {date_start_validity: date_start_validity,
            date_end_validity: date_end_validity}}).then(data => {
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

// export const update = (req, res) => {
//     const id = parseInt(req.params.id);
//     const body = req.body;
//     Date_validity_ticket.update(body, {
//         where: { id: id }
//     }).then(data => {
//         if (data === 1) {
//             res.send({
//                 message: "Date_validity_ticket was updated successfully."
//             });
//         } else {
//             res.send({
//                 message: `Cannot update Date_validity_ticket with id=${id}. Maybe Date_validity_ticket was not found or req.body is empty!`
//             });
//         }
//     }).catch(e => {
//         res.status(500).send({
//             message: e.message || "Some error occurred."
//         });
//     });
// }

export const remove = (req, res) => {
    const date_start_validity = req.query.date_start_validity;
    const date_end_validity = req.query.date_end_validity;
    Date_validity_ticket.destroy({
        where: { date_start_validity: date_start_validity, date_end_validity: date_end_validity }
    }).then(data => {
        if (data === 1) {
            res.send({
                message: "Date_validity_ticket was deleted successfully!"
            });
        } else {
            res.send({
                message: `Cannot delete Date_validity_ticket with this primary Key. Maybe Date_validity_ticket was not found!`
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
