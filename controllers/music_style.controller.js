import MusicStyle from '../models/MusicStyle.model.js';

export const findAll = (req, res) => {
    MusicStyle.findAll().then(data => {
        res.send(data);
    }).catch(e => {
        res.status(500).send({
            message: e.message || "Some error occurred."
        });
    });
}

export const findOne = (req, res) => {
    const id = parseInt(req.params.id);
    MusicStyle.findByPk(id).then(data => {
        res.send(data);
    }).catch(e => {
        res.status(500).send({
            message: e.message || "Some error occurred."
        });
    });
}

export const create = (req, res) => {
    const body = req.body;
    MusicStyle.create(body).then(data => {
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
    MusicStyle.update(body, {
        where: { id: id }
    }).then(data => {
        if (data === 1) {
            res.send({
                message: "MusicStyle was updated successfully."
            });
        } else {
            res.send({
                message: `Cannot update MusicStyle with id=${id}. Maybe MusicStyle was not found or req.body is empty!`
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
    MusicStyle.destroy({
        where: { id: id }
    }).then(data => {
        if (data === 1) {
            res.send({
                message: "MusicStyle was deleted successfully!"
            });
        } else {
            res.send({
                message: `Cannot delete MusicStyle with id=${id}. Maybe MusicStyle was not found!`
            });
        }
    }).catch(e => {
        res.status(500).send({
            message: e.message || "Some error occurred."
        });
    });
}

export const removeAll = (req, res) => {
    MusicStyle.destroy({
        where: {},
        truncate: false
    }).then(data => {
        res.send({ message: `${data} MusicStyle were deleted successfully!` });
    }).catch(e => {
        res.status(500).send({
            message: e.message || "Some error occurred."
        });
    });
}
