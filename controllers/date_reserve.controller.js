import model from '../models/index.js';
const Date_reserve = model.Date_reserve;

export const findAll = (req, res) => {
    Date_reserve.findAll().then(data => {
        console.log(JSON.stringify(data))
        res.send(data);
    }).catch(e => {
        res.status(500).send({
            message: e.message || "Some error occurred."
        });
    });
}

export const findOne = (req, res) => {
    const date_start_placereserved = req.query.date_start_placereserved;
    const date_end_placereserved = req.query.date_end_placereserved;
    Date_reserve.findOne({where: {date_start_placereserved: date_start_placereserved,
            date_end_placereserved: date_end_placereserved}}).then(data => {
        res.send(data);
    }).catch(e => {
        res.status(500).send({
            message: e.message || "Some error occurred."
        });
    });
}

export const create = (req, res) => {
    const body = req.body;
    Date_reserve.create(body).then(data => {
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
//     Date_reserve.update(body, {
//         where: { id: id }
//     }).then(data => {
//         if (data === 1) {
//             res.send({
//                 message: "Date_reserve was updated successfully."
//             });
//         } else {
//             res.send({
//                 message: `Cannot update Date_reserve with id=${id}. Maybe Date_reserve was not found or req.body is empty!`
//             });
//         }
//     }).catch(e => {
//         res.status(500).send({
//             message: e.message || "Some error occurred."
//         });
//     });
// }

export const remove = (req, res) => {
    const date_start_placereserved = req.query.date_start_placereserved;
    const date_end_placereserved = req.query.date_end_placereserved;
    Date_reserve.destroy({
        where: { date_start_placereserved: date_start_placereserved, date_end_placereserved: date_end_placereserved }
    }).then(data => {
        if (data === 1) {
            res.send({
                message: "Date_reserve was deleted successfully!"
            });
        } else {
            res.send({
                message: `Cannot delete Date_reserve with this primary Key. Maybe Date_reserve was not found!`
            });
        }
    }).catch(e => {
        res.status(500).send({
            message: e.message || "Some error occurred."
        });
    });
}

export const removeAll = (req, res) => {
    Date_reserve.destroy({
        where: {},
        truncate: false
    }).then(data => {
        res.send({ message: `${data} Date_reserve were deleted successfully!` });
    }).catch(e => {
        res.status(500).send({
            message: e.message || "Some error occurred."
        });
    });
}
