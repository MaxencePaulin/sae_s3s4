import { where } from 'sequelize';
import model from '../models/index.js';
const Concert = model.Concert;
import { Op } from 'sequelize';

export const findAll = (req, res) => {
    Concert.findAll({include: [{model: model.Artist}, {model: model.Scene,
            include: [{model: model.TypeScene}]}]}).then(data => {
        res.send(data);
    }).catch(e => {
        res.status(500).send({
            message: e.message || "Some error occurred."
        });
    });
}

export const findOne = (req, res) => {
    const id_artist = parseInt(req.query.id_artist);
    const id_scene = parseInt(req.query.id_scene);
    Concert.findOne({where: {id_artist: id_artist, id_scene: id_scene},
        include: [{model: model.Artist}, {model: model.Scene,
            include: [{model: model.TypeScene}]}]}).then(data => {
        res.send(data);
    }).catch(e => {
        res.status(500).send({
            message: e.message || "Some error occurred."
        });
    });
}

export const create = (req, res) => {
    const body = req.body;
    Concert.create(body).then(data => {
        res.send(data);
    }).catch(e => {
        res.status(500).send({
            message: e.message || "Some error occurred."
        });
    });
}

// export const update = (req, res) => {
//     const id_artist = parseInt(req.query.id_artist);
//     const id_scene = parseInt(req.query.id_scene);
//     const body = req.body;
//     Concert.update(body, {
//         where: { id_artist: id_artist , id_scene : id_scene }
//     }).then(data => {
//         if (data === 1) {
//             res.send({
//                 message: "Concert was updated successfully."
//             });
//         } else {
//             res.send({
//                 message: `Cannot update Concert with id_artist=${id_artist} and id_scene=${id_scene}. Maybe Concert was not found or req.body is empty!`
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
    const id_scene = parseInt(req.query.id_scene);
    Concert.destroy({
        where: { id_artist: id_artist , id_scene: id_scene }
    }).then(data => {
        if (data === 1) {
            res.send({
                message: "Concert was deleted successfully!"
            });
        } else {
            res.send({
                message: `Cannot delete Concert with id_artist=${id_artist} and id_scene=${id_scene}. Maybe Concert was not found!`
            });
        }
    }).catch(e => {
        res.status(500).send({
            message: e.message || "Some error occurred."
        });
    });
}

export const removeAll = (req, res) => {
    Concert.destroy({
        where: {},
        truncate: false
    }).then(data => {
        res.send({ message: `${data} Concert were deleted successfully!` });
    }).catch(e => {
        res.status(500).send({
            message: e.message || "Some error occurred."
        });
    });
}
export const findByStyle = async (req, res) => {
    let tabId = await model.Make.findAll({where: {id_musicstyle: parseInt(req.params.id)}});
    let tabIdArtist = [];
    for (const id of tabId) {
        tabIdArtist.push(id.dataValues.id_artist);
    }
    if (tabIdArtist.length === 0) {
        return res.status(500).send("No artist with this style");
    }
    let result = await Concert.findAll({where: {id_artist: {[Op.in]: tabIdArtist}}, include: [{model: model.Artist}, {model: model.Scene}]})
    if (result.length === 0) {
        return res.status(500).send("No concert with this style");
    }
    res.status(200).send(result);
}
