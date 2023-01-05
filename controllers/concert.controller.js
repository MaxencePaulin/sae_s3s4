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
export const findByStyle = (req, res) => {
    console.log(req.params.id);
    model.Make.findAll({where: {id_musicstyle : `${req.params.id}`}},{include :[{model:model.Artist}]}  ).then(data=>{
        let id=[];
        for (const id_artist of data) {
            id.push(id_artist.dataValues.id_artist)
        };
        console.log(id)
        Concert.findAll( {include: [{model: model.Scene} , {model: model.Artist}]}
        ).then(data=>{
            const resu =data.filter(toto => id.includes(toto.id_artist) )
            res.send(resu)

        })
        .catch(e => {
            res.status(500).send({
                message: e.message || "Some error occurred."
            });
    })
    });
}
