import model from '../models/index.js';
const Bought = model.Bought;

export const findAll = (req, res) => {
    Bought.findAll({include: [{model: model.Users}, {model: model.Ticket}]}).then(data => {
        res.send(data);
    }).catch(e => {
        res.status(500).send({
            message: e.message || "Some error occurred."
        });
    });
}

export const findOne = (req, res) => {
    const id_user = parseInt(req.query.id_user);
    const id_ticket = parseInt(req.query.id_ticket);
    const date_start_validity = req.query.date_start_validity ;
    const date_end_validity = req.query.date_end_validity ;
    Bought.findOne({where: {id_user: id_user, id_ticket: id_ticket , date_start_validity: date_start_validity,
            date_end_validity: date_end_validity},
            include: [{model: model.Users}, {model: model.Ticket}]}).then(data => {
        res.send(data);
    }).catch(e => {
        res.status(500).send({
            message: e.message || "Some error occurred."
        });
    });
}

export const create = (req, res) => {
    const body = req.body;
    Bought.create(body).then(data => {
        res.send(data);
    }).catch(e => {
        res.status(500).send({
            message: e.message || "Some error occurred."
        });
    });
}

// export const update = (req, res) => {
//     const id_user = parseInt(req.body.id_user_old);
//     const id_ticket = parseInt(req.body.id_ticket_old);
//     const date_start_validity_old = req.body.date_start_validity_old;
//     const date_end_validity_old = req.body.date_end_validity_old;

//     const body = {
//         id_user : id_user_new ,
//         id_ticket :id_ticket_new ,
//         date_start_validity :date_start_validity_new ,
//         date_end_validity : date_end_validity_end 
//     };
//     Bought.update(body, {
//         where: { id_user: id_user , id_ticket: id_ticket , date_start_validity : date_start_validity_old , date_end_validity: date_end_validity_old}
//     }).then(data => {
//         if (data === 1) {
//             res.send({
//                 message: "Bought was updated successfully."
//             });
//         } else {
//             res.send({
//                 message: `Cannot update Bought with this primary key . Maybe Bought was not found or req.body is empty!`
//             });
//         }
//     }).catch(e => {
//         res.status(500).send({
//             message: e.message || "Some error occurred."
//         });
//     });
// }

export const remove = (req, res) => {
    const id_user = parseInt(req.query.id_user);
    const id_ticket = parseInt(req.query.id_ticket);
    const date_start_validity = req.query.date_start_validity;
    const date_end_validity = req.query.date_end_validity;
    Bought.destroy({
        where: { id_user: id_user , id_ticket: id_ticket , date_start_validity : date_start_validity, date_end_validity: date_end_validity}
    }).then(data => {
        if (data === 1) {
            res.send({
                message: "Bought was deleted successfully!"
            });
        } else {
            res.send({
                message: `Cannot delete Bought with this primary Key. Maybe Bought was not found!`
            });
        }
    }).catch(e => {
        res.status(500).send({
            message: e.message || "Some error occurred."
        });
    });
}

export const removeAll = (req, res) => {
    Bought.destroy({
        where: {},
        truncate: false
    }).then(data => {
        res.send({ message: `${data} Bought were deleted successfully!` });
    }).catch(e => {
        res.status(500).send({
            message: e.message || "Some error occurred."
        });
    });
}
