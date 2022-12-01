import model from '../models/index.js';
const Concert = model.Concert;

export const findAll = (req, res) => {
    Concert.findAll().then(data => {
        res.send(data);
    }).catch(e => {
        res.status(500).send({
            message: e.message || "Some error occurred."
        });
    });
}

export const findOne = (req, res) => {
    const id_artist = parseInt(req.params.id_artist);
    const id_scene = parseInt(req.params.id_scene);
    Concert.findByPk(id_artist, id_scene).then(data => {
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

export const update = (req, res) => {
    const id_artist = parseInt(req.params.id_artist);
    const id_scene = parseInt(req.params.id_scene);
    const body = req.body;
    Concert.update(body, {
        where: { id_artist: id_artist , id_scene : id_scene }
    }).then(data => {
        if (data === 1) {
            res.send({
                message: "Concert was updated successfully."
            });
        } else {
            res.send({
                message: `Cannot update Concert with id_artist=${id_artist} and id_scene=${id_scene}. Maybe Concert was not found or req.body is empty!`
            });
        }
    }).catch(e => {
        res.status(500).send({
            message: e.message || "Some error occurred."
        });
    });
}

export const remove = (req, res) => {
    const id_artist = parseInt(req.params.id_artist);
    const id_scene = parseInt(req.params.id_scene);
    Concert.destroy({
        where: { id_artist: id_artist , id_scene : id_scene }
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
