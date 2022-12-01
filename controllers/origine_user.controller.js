import model from '../models/index.js';
const Origineuser = model.Origineuser;

export const findAll = (req, res) => {
    Origineuser.findAll().then(data => {
        res.send(data);
    }).catch(e => {
        res.status(500).send({
            message: e.message || "Some error occurred."
        });
    });
}

export const findOne = (req, res) => {
    const id_user = parseInt(req.params.id_user);
    const id_nationality = parseInt(req.params.id_nationality);   
    Origineuser.findByPk( id_nationality , id_user).then(data => {
        res.send(data);
    }).catch(e => {
        res.status(500).send({
            message: e.message || "Some error occurred."
        });
    });
}

export const create = (req, res) => {
    const body = req.body;
    Origineuser.create(body).then(data => {
        res.send(data);
    }).catch(e => {
        res.status(500).send({
            message: e.message || "Some error occurred."
        });
    });
}

export const update = (req, res) => {
    const id_user = parseInt(req.params.id_user);
    const id_nationality = parseInt(req.params.id_nationality);   
    const body = req.body;
    Origineuser.update(body, {
        where: {id_nationality: id_nationality , id_user: id_user}
    }).then(data => {
        if (data === 1) {
            res.send({
                message: "Origineuser was updated successfully."
            });
        } else {
            res.send({
                message: `Cannot update Origineuser with id_user=${id_user} and id_nationality=${id_nationality}. Maybe Origineuser was not found or req.body is empty!`
            });
        }
    }).catch(e => {
        res.status(500).send({
            message: e.message || "Some error occurred."
        });
    });
}

export const remove = (req, res) => {
    const id_user = parseInt(req.params.id_user);
    const id_nationality = parseInt(req.params.id_nationality);   
    Origineuser.destroy({
        where: {id_nationality: id_nationality , id_user: id_user}
    }).then(data => {
        if (data === 1) {
            res.send({
                message: "Origineuser was deleted successfully!"
            });
        } else {
            res.send({
                message: `Cannot delete Origineuser with id_user=${id_user} and id_nationality=${id_nationality}. Maybe Origineuser was not found!`
            });
        }
    }).catch(e => {
        res.status(500).send({
            message: e.message || "Some error occurred."
        });
    });
}

export const removeAll = (req, res) => {
    Origineuser.destroy({
        where: {},
        truncate: false
    }).then(data => {
        res.send({ message: `${data} Origineuser were deleted successfully!` });
    }).catch(e => {
        res.status(500).send({
            message: e.message || "Some error occurred."
        });
    });
}
