import model from '../models/index.js';
const Make = model.Make;

export const findAll = (req, res) => {
    Make.findAll({include: [{model: model.Artist}, {model: model.MusicStyle}]}).then(data => {
        res.send(data);
    }).catch(e => {
        res.status(500).send({
            message: e.message || "Some error occurred."
        });
    });
}

export const findOne = (req, res) => {
    const id_artist = parseInt(req.query.id_artist);
    const id_musicstyle = parseInt(req.query.id_musicstyle);

    Make.findOne({where: {id_artist: id_artist , id_musicstyle: id_musicstyle},
        include: [{model: model.Artist}, {model: model.MusicStyle}]}).then(data => {
        res.send(data);
    }).catch(e => {
        res.status(500).send({
            message: e.message || "Some error occurred."
        });
    });
}

export const create = (req, res) => {
    const body = req.body;
    console.log(body);
    Make.create(body).then(data => {
        res.send(data);
    }).catch(e => {
        res.status(500).send({
            message: e.message || "Some error occurred."
        });
    });
}

// export const update = (req, res) => {
//     const id_artist = parseInt(req.params.id_artist);
//     const id_musicstyle = parseInt(req.params.id_musicstyle);
//
//     const body = req.body;
//     Make.update(body, {
//         where: { id_artist: id_artist , id_musicstyle: id_musicstyle }
//     }).then(data => {
//         if (data === 1) {
//             res.send({
//                 message: "Make was updated successfully."
//             });
//         } else {
//             res.send({
//                 message: `Cannot update Make with id_artist=${id_artist} and id_musicstyle=${id_musicstyle}. Maybe Make was not found or req.body is empty!`
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
    const id_musicstyle = parseInt(req.query.id_musicstyle);
    Make.destroy({
        where: { id_artist: id_artist , id_musicstyle: id_musicstyle }
    }).then(data => {
        if (data === 1) {
            res.send({
                message: "Make was deleted successfully!"
            });
        } else {
            res.send({
                message: `Cannot delete Make with with id_artist=${id_artist} and id_musicstyle=${id_musicstyle}. Maybe Make was not found!`
            });
        }
    }).catch(e => {
        res.status(500).send({
            message: e.message || "Some error occurred."
        });
    });
}

export const removeAll = (req, res) => {
    Make.destroy({
        where: {},
        truncate: false
    }).then(data => {
        res.send({ message: `${data} Make were deleted successfully!` });
    }).catch(e => {
        res.status(500).send({
            message: e.message || "Some error occurred."
        });
    });
}
