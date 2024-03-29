import model from '../models/index.js';
const SocialNetwork = model.SocialNetwork;

export const findAll = (req, res) => {
    SocialNetwork.findAll().then(data => {
        res.send(data);
    }).catch(e => {
        res.status(500).send({
            message: e.message || "Some error occurred."
        });
    });
}

export const findOne = (req, res) => {
    const id = parseInt(req.params.id);
    SocialNetwork.findByPk(id).then(data => {
        res.send(data);
    }).catch(e => {
        res.status(500).send({
            message: e.message || "Some error occurred."
        });
    });
}

export const create = (req, res) => {
    const body = req.body;
    SocialNetwork.create(body).then(data => {
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
    SocialNetwork.update(body, {
        where: { id_socialnetwork: id }
    }).then(data => {
        if (data[0] === 1) {
            res.send({
                message: "SocialNetwork was updated successfully."
            });
        } else {
            res.send({
                message: `Cannot update SocialNetwork with id=${id}. Maybe SocialNetwork was not found or req.body is empty!`
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
    SocialNetwork.destroy({
        where: { id_socialnetwork: id }
    }).then(data => {
        if (data === 1) {
            res.send({
                message: "SocialNetwork was deleted successfully!"
            });
        } else {
            res.send({
                message: `Cannot delete SocialNetwork with id=${id}. Maybe SocialNetwork was not found!`
            });
        }
    }).catch(e => {
        res.status(500).send({
            message: e.message || "Some error occurred."
        });
    });
}

export const removeAll = (req, res) => {
    SocialNetwork.destroy({
        where: {},
        truncate: false
    }).then(data => {
        res.send({ message: `${data} SocialNetwork were deleted successfully!` });
    }).catch(e => {
        res.status(500).send({
            message: e.message || "Some error occurred."
        });
    });
}
