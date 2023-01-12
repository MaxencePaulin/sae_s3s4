import model from '../models/index.js';
const Bought = model.Bought;

export const findAll = (req, res) => {
    Bought.findAll({include: [{model: model.Users}, {model: model.Ticket}]}).then(data => {
        res.send(data);
    }).catch(e => {
        res.status(500).send({
            message: e.message || "Some error occurred."
        });
    });
}

export const findOne = (req, res) => {
    const id_user = parseInt(req.query.id_user);
    const id_ticket = parseInt(req.query.id_ticket);
    const date_start_validity = req.query.date_start_validity ;
    const date_end_validity = req.query.date_end_validity ;
    Bought.findOne({where: {id_user: id_user, id_ticket: id_ticket , date_start_validity: date_start_validity,
            date_end_validity: date_end_validity},
            include: [{model: model.Users}, {model: model.Ticket}]}).then(data => {
        res.send(data);
        console.log(data);
    }).catch(e => {
        res.status(500).send({
            message: e.message || "Some error occurred."
        });
    });
}

export const findAllByUser = (req, res) => {
    const id_user = parseInt(req.params.id);
    Bought.findAll({where: {id_user: id_user}, include: [{model: model.Ticket}]}).then(data => {
        res.send(data);
    }).catch(e => {
        res.status(500).send({
            message: e.message || "Some error occurred."
        });
    });
}

export const create = (req, res) => {
    const body = req.body;
    if (body.date_start_validity !== null && !/^\d{4}-\d{2}-\d{2}$/.test(body.date_start_validity)) {
        let date = body.date_start_validity.split("/");
        body.date_start_validity = date[2] + "-" + date[1] + "-" + date[0];
    }
    if (body.date_end_validity !== null && !/^\d{4}-\d{2}-\d{2}$/.test(body.date_end_validity)) {
        let date = body.date_end_validity.split("/");
        body.date_end_validity = date[2] + "-" + date[1] + "-" + date[0];
    }
    Bought.create(body).then(data => {
        res.send(data);
    }).catch(e => {
        console.log(e);
        res.status(500).send({
            message: e.message || "Some error occurred."
        });
    });
}
export const remove = (req, res) => {
    const id_user = parseInt(req.query.id_user);
    const id_ticket = parseInt(req.query.id_ticket);
    const date_start_validity = req.query.date_start_validity;
    const date_end_validity = req.query.date_end_validity;
    Bought.destroy({
        where: { id_user: id_user , id_ticket: id_ticket , date_start_validity : date_start_validity, date_end_validity: date_end_validity}
    }).then(data => {
        if (data === 1) {
            res.send({
                message: "Bought was deleted successfully!"
            });
        } else {
            res.send({
                message: `Cannot delete Bought with this primary Key. Maybe Bought was not found!`
            });
        }
    }).catch(e => {
        res.status(500).send({
            message: e.message || "Some error occurred."
        });
    });
}

export const removeAll = (req, res) => {
    Bought.destroy({
        where: {},
        truncate: false
    }).then(data => {
        res.send({ message: `${data} Bought were deleted successfully!` });
    }).catch(e => {
        res.status(500).send({
            message: e.message || "Some error occurred."
        });
    });
}
