import model from '../models/index.js';
const Proposes = model.Proposes;

export const findAll = (req, res) => {
    Proposes.findAll({include: [{model: model.Prestataire,
            include: [{model: model.TypePrestataire}]},
            {model: model.Service}]}).then(data => {
        res.send(data);
    }).catch(e => {
        res.status(500).send({
            message: e.message || "Some error occurred."
        });
    });
}

export const findOne = (req, res) => {
    const id_prestataire = parseInt(req.query.id_prestataire);
    const id_service = parseInt(req.query.id_service);
    Proposes.findOne({where: {id_prestataire: id_prestataire, id_service: id_service},
        include: [{model: model.Prestataire, include: [{model: model.TypePrestataire}]},
                {model: model.Service}]}).then(data => {
        res.send(data);
    }).catch(e => {
        res.status(500).send({
            message: e.message || "Some error occurred."
        });
    });
}

export const create = (req, res) => {
    const body = req.body;
    Proposes.create(body).then(data => {
        res.send(data);
    }).catch(e => {
        res.status(500).send({
            message: e.message || "Some error occurred."
        });
    });
}

export const createWithNewService = async (req, res) => {
    const body = req.body;
    let service = await model.Service.create({libelle_service: body.libelle_service}, {returning: true});
    Proposes.create({id_prestataire: body.id_prestataire, id_service: service.id_service}).then(data => {
        res.send(data);
    }).catch(e => {
        res.status(500).send({
            message: e.message || "Some error occurred."
        });
    })
}

// export const update = (req, res) => {
//     const id_prestataire = parseInt(req.params.id_prestataire);
//     const id_service = parseInt(req.params.id_service);
//     const body = req.body;
//     Proposes.update(body, {
//         where: { id_prestataire: id_prestataire , id_service : id_service }
//     }).then(data => {
//         if (data === 1) {
//             res.send({
//                 message: "Proposes was updated successfully."
//             });
//         } else {
//             res.send({
//                 message: `Cannot update Proposes with id_prestatair=${id_prestataire} and id_service=${id_service} Maybe Proposes was not found or req.body is empty!`
//             });
//         }
//     }).catch(e => {
//         res.status(500).send({
//             message: e.message || "Some error occurred."
//         });
//     });
// }

export const remove = (req, res) => {
    const id_prestataire = parseInt(req.query.id_prestataire);
    const id_service = parseInt(req.query.id_service);
    Proposes.destroy({
        where: { id_prestataire: id_prestataire , id_service: id_service }
    }).then(data => {
        if (data === 1) {
            res.send({
                message: "Proposes was deleted successfully!"
            });
        } else {
            res.send({
                message: `Cannot delete Proposes with id_prestatair=${id_prestataire} and id_service=${id_service}. Maybe Proposes was not found!`
            });
        }
    }).catch(e => {
        res.status(500).send({
            message: e.message || "Some error occurred."
        });
    });
}

export const removeAll = (req, res) => {
    Proposes.destroy({
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
