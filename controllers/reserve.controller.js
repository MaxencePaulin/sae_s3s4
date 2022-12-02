import model from '../models/index.js';
const Reserve = model.Reserve;

export const findAll = (req, res) => {
    Reserve.findAll({include: [{model: model.Users}, {model: model.Place},
            {model: model.Date_reserve}]}).then(data => {
        res.send(data);
    }).catch(e => {
        res.status(500).send({
            message: e.message || "Some error occurred."
        });
    });
}

export const findOne = (req, res) => {
    const id_user = parseInt(req.body.id_user);
    const id_place = parseInt(req.body.id_ticket);
    const date_start_placereserved = req.body.date_start_placereserved;
    const date_end_placereserved = req.body.date_end_placereserved;
    Reserve.findOne({where: {id_user: id_user, id_place: id_place,
            date_start_placereserved: date_start_placereserved, date_end_placereserved: date_end_placereserved},
        include: [{model: model.Users}, {model: model.Place},
                {model: model.Date_reserve}]}).then(data => {
        res.send(data);
    }).catch(e => {
        res.status(500).send({
            message: e.message || "Some error occurred."
        });
    });
}

export const create = (req, res) => {
    const body = req.body;
    Reserve.create(body).then(data => {
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
//     Reserve.update(body, {
//         where: { id: id }
//     }).then(data => {
//         if (data === 1) {
//             res.send({
//                 message: "Proposes was updated successfully."
//             });
//         } else {
//             res.send({
//                 message: `Cannot update Proposes with id=${id}. Maybe Proposes was not found or req.body is empty!`
//             });
//         }
//     }).catch(e => {
//         res.status(500).send({
//             message: e.message || "Some error occurred."
//         });
//     });
// }

export const remove = (req, res) => {
    const id_user = parseInt(req.body.id_user);
    const id_place = parseInt(req.body.id_ticket);
    const date_start_placereserved = req.body.date_start_placereserved;
    const date_end_placereserved = req.body.date_end_placereserved;
    Reserve.destroy({
        where: { id_user: id_user , id_place: id_place , date_start_placereserved:date_start_placereserved , date_end_placereserved:date_end_placereserved }
    }).then(data => {
        if (data === 1) {
            res.send({
                message: "Reserve was deleted successfully!"
            });
        } else {
            res.send({
                message: `Cannot delete Reserve with this primary key. Maybe Reserve was not found!`
            });
        }
    }).catch(e => {
        res.status(500).send({
            message: e.message || "Some error occurred."
        });
    });
}

export const removeAll = (req, res) => {
    Reserve.destroy({
        where: {},
        truncate: false
    }).then(data => {
        res.send({ message: `${data} Reserve were deleted successfully!` });
    }).catch(e => {
        res.status(500).send({
            message: e.message || "Some error occurred."
        });
    });
}
