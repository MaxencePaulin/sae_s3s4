import model from '../models/index.js';
const Access = model.Access;

export const findAll = (req, res) => {
    Access.findAll({include: [{model: model.Role}, {model: model.Droit}]}).then(data => {
        res.send(data);
    }).catch(e => {
        res.status(500).send({
            message: e.message || "Some error occurred."
        });
    });
}

export const findOne = (req, res) => {
    const id_role = parseInt(req.params.id_role);
    const id_droit = parseInt(req.params.id_droit);
    Access.findOne({where: {id_role: id_role, id_droit: id_droit},
        include: [{model: model.Role}, {model: model.Droit}]}).then(data => {
        res.send(data);
    }).catch(e => {
        console.log(e)
        res.status(500).send({
            message: e.message || "Some error occurred."
        });
    });
}

export const create = (req, res) => {
    const body = req.body;
    Access.create(body).then(data => {
        res.send(data);
    }).catch(e => {
        res.status(500).send({
            message: e.message || "Some error occurred."
        });
    });
}

// export const update = (req, res) => {
//     const id_role = parseInt(req.params.id_role);
//     const id_droit = parseInt(req.params.id_droit);
//     const body = req.body;
//     Access.update(body, {
//         where: { id_role: id_role , id_droit: id_droit }
//     }).then(data => {
//         if (data === 1) {
//             res.send({
//                 message: "Access was updated successfully."
//             });
//         } else {
//             res.send({
//                 message: `Cannot update Access with id_role=${id_role} and id_droit=${id_droit}. Maybe Access was not found or req.body is empty!`
//             });
//         }
//     }).catch(e => {
//         res.status(500).send({
//             message: e.message || "Some error occurred."
//         });
//     });
// }

export const remove = (req, res) => {
    const id_role = parseInt(req.params.id_role);
    const id_droit = parseInt(req.params.id_droit);
    Access.destroy({
        where: { id_role: id_role , id_droit: id_droit }
    }).then(data => {
        if (data === 1) {
            res.send({
                message: "Access was deleted successfully!"
            });
        } else {
            res.send({
                message: `Cannot delete Access with id_role=${id_role} and id_droit=${id_droit}. Maybe Access was not found!`
            });
        }
    }).catch(e => {
        res.status(500).send({
            message: e.message || "Some error occurred."
        });
    });
}

export const removeAll = (req, res) => {
    Access.destroy({
        where: {},
        truncate: false
    }).then(data => {
        res.send({ message: `${data} Access were deleted successfully!` });
    }).catch(e => {
        res.status(500).send({
            message: e.message || "Some error occurred."
        });
    });
}
