import model from '../models/index.js';
const Artist = model.Artist;

export const findAll = (req, res) => {
    Artist.findAll().then(data => {
        res.send(data);
    }).catch(e => {
        res.status(500).send({
            message: e.message || "Some error occurred."
        });
    });
}

export const findOne = (req, res) => {
    const id = parseInt(req.params.id);
    Artist.findByPk(id).then(data => {
        res.send(data);
    }).catch(e => {
        res.status(500).send({
            message: e.message || "Some error occurred."
        });
    });
}

export const create = (req, res) => {
    const body = req.body;
    Artist.create(body).then(data => {
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
    Artist.update(body, {
        where: { id_artist: id }
    }).then(data => {
        if (data === 1) {
            res.send({
                message: "Artist was updated successfully."
            });
        } else {
            res.send({
                message: `Cannot update Artist with id=${id}. Maybe Artist was not found or req.body is empty!`
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
    Artist.destroy({
        where: { id_artist: id }
    }).then(data => {
        if (data === 1) {
            res.send({
                message: "Artist was deleted successfully!"
            });
        } else {
            res.send({
                message: `Cannot delete Artist with id=${id}. Maybe Artist was not found!`
            });
        }
    }).catch(e => {
        res.status(500).send({
            message: e.message || "Some error occurred."
        });
    });
}

export const removeAll = (req, res) => {
    Artist.destroy({
        where: {},
        truncate: false
    }).then(data => {
        res.send({ message: `${data} Artist were deleted successfully!` });
    }).catch(e => {
        res.status(500).send({
            message: e.message || "Some error occurred."
        });
    });
}
