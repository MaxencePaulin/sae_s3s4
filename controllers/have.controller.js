import model from '../models/index.js';
const Have = model.Have;

export const findAll = (req, res) => {
    Have.findAll({include: [{model: model.Artist}, {model: model.SocialNetwork}]}).then(data => {
        res.send(data);
    }).catch(e => {
        res.status(500).send({
            message: e.message || "Some error occurred."
        });
    });
}

export const findOne = (req, res) => {
    const id_artist = parseInt(req.query.id_artist);
    const id_socialnetwork = parseInt(req.query.id_socialnetwork);

    Have.findOne({where: {id_artist: id_artist, id_socialnetwork: id_socialnetwork},
        include: [{model: model.Artist}, {model: model.SocialNetwork}]}).then(data => {
        res.send(data);
    }).catch(e => {
        res.status(500).send({
            message: e.message || "Some error occurred."
        });
    });
}

export const create = (req, res) => {
    const body = req.body;
    Have.create(body).then(data => {
        res.send(data);
    }).catch(e => {
        res.status(500).send({
            message: e.message || "Some error occurred."
        });
    });
}

// export const update = (req, res) => {
//     const id_artist = parseInt(req.params.id_artist);
//     const id_socialnetwork = parseInt(req.params.id_socialnetwork);
//
//     const body = req.body;
//     Have.update(body, {
//         where: { id_artist: id_artist, id_socialnetwork: id_socialnetwork }
//     }).then(data => {
//         if (data === 1) {
//             res.send({
//                 message: "Have was updated successfully."
//             });
//         } else {
//             res.send({
//                 message: `Cannot update Have with id_artist=${id_artist} and id_socialnetwork=${id_socialnetwork}. Maybe Have was not found or req.body is empty!`
//             });
//         }
//     }).catch(e => {
//         res.status(500).send({
//             message: e.message || "Some error occurred."
//         });
//     });
// }

export const remove = (req, res) => {
    const id_artist = parseInt(req.query.id_artist);
    const id_socialnetwork = parseInt(req.query.id_socialnetwork);
    Have.destroy({
        where: { id_artist: id_artist, id_socialnetwork: id_socialnetwork }
    }).then(data => {
        if (data === 1) {
            res.send({
                message: "Have was deleted successfully!"
            });
        } else {
            res.send({
                message: `Cannot delete Have with id_artist=${id_artist} and id_socialnetwork=${id_socialnetwork}. Maybe Have was not found!`
            });
        }
    }).catch(e => {
        res.status(500).send({
            message: e.message || "Some error occurred."
        });
    });
}

export const removeAll = (req, res) => {
    Have.destroy({
        where: {},
        truncate: false
    }).then(data => {
        res.send({ message: `${data} Have were deleted successfully!` });
    }).catch(e => {
        res.status(500).send({
            message: e.message || "Some error occurred."
        });
    });
}
