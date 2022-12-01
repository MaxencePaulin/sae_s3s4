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
    const id = parseInt(req.params.id);
    OrigineArtist.findByPk(id).then(data => {
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

export const update = (req, res) => {
    const id = parseInt(req.params.id);
    const body = req.body;
    OrigineArtist.update(body, {
        where: { id: id }
    }).then(data => {
        if (data === 1) {
            res.send({
                message: "OrigineArtist was updated successfully."
            });
        } else {
            res.send({
                message: `Cannot update OrigineArtist with id=${id}. Maybe OrigineArtist was not found or req.body is empty!`
            });
        }
    }).catch(e => {
        res.status(500).send({
            message: e.message || "Some error occurred."
        });
    });
}

export const remove = (req, res) => {
    const id = parseInt(req.params.id);
    OrigineArtist.destroy({
        where: { id: id }
    }).then(data => {
        if (data === 1) {
            res.send({
                message: "OrigineArtist was deleted successfully!"
            });
        } else {
            res.send({
                message: `Cannot delete OrigineArtist with id=${id}. Maybe OrigineArtist was not found!`
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
