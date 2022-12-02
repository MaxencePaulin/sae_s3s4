import model from '../models/index.js';
const OrigineArtist = model.OrigineArtist;

export const findAll = (req, res) => {
    OrigineArtist.findAll().then(data => {
        res.send(data);
    }).catch(e => {
        res.status(500).send({
            message: e.message || "Some error occurred."
        });
    });
}

export const findOne = (req, res) => {
    const id_artist = parseInt(req.params.id_artist);
    const id_nationality = parseInt(req.params.id_nationality);
    OrigineArtist.findByPk(id_artist ,id_nationality).then(data => {
        res.send(data);
    }).catch(e => {
        res.status(500).send({
            message: e.message || "Some error occurred."
        });
    });
}

export const create = (req, res) => {
    const body = req.body;
    OrigineArtist.create(body).then(data => {
        res.send(data);
    }).catch(e => {
        res.status(500).send({
            message: e.message || "Some error occurred."
        });
    });
}

// export const update = (req, res) => {
//     const id_artist = parseInt(req.params.id_artist);
//     const id_nationality = parseInt(req.params.id_nationality);
//     const body = req.body;
//     OrigineArtist.update(body, {
//         where: { id_artist: id_artist , id_nationality: id_nationality }
//     }).then(data => {
//         if (data === 1) {
//             res.send({
//                 message: "OrigineArtist was updated successfully."
//             });
//         } else {
//             res.send({
//                 message: `Cannot update OrigineArtist with id_artist=${id_artist} and id_nationality=${id_nationality}. Maybe OrigineArtist was not found or req.body is empty!`
//             });
//         }
//     }).catch(e => {
//         res.status(500).send({
//             message: e.message || "Some error occurred."
//         });
//     });
// }

export const remove = (req, res) => {
    const id_artist = parseInt(req.params.id_artist);
    const id_nationality = parseInt(req.params.id_nationality);
    OrigineArtist.destroy({
        where: { id_artist: id_artist , id_nationality: id_nationality }
    }).then(data => {
        if (data === 1) {
            res.send({
                message: "OrigineArtist was deleted successfully!"
            });
        } else {
            res.send({
                message: `Cannot delete OrigineArtist with id_artist=${id_artist} and id_nationality=${id_nationality}. Maybe OrigineArtist was not found!`
            });
        }
    }).catch(e => {
        res.status(500).send({
            message: e.message || "Some error occurred."
        });
    });
}

export const removeAll = (req, res) => {
    OrigineArtist.destroy({
        where: {},
        truncate: false
    }).then(data => {
        res.send({ message: `${data} OrigineArtist were deleted successfully!` });
    }).catch(e => {
        res.status(500).send({
            message: e.message || "Some error occurred."
        });
    });
}
