import model from '../models/index.js';
const Guest_book = model.Guest_book;

export const findAll = (req, res) => {
    Guest_book.findAll().then(data => {
        res.send(data);
    }).catch(e => {
        res.status(500).send({
            message: e.message || "Some error occurred."
        });
    });
}

export const findOne = (req, res) => {
    const id = parseInt(req.params.id);
    Guest_book.findByPk(id).then(data => {
        res.send(data);
    }).catch(e => {
        res.status(500).send({
            message: e.message || "Some error occurred."
        });
    });
}

export const create = (req, res) => {
    const body = req.body;
    Guest_book.create(body).then(data => {
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
    Guest_book.update(body,{
        where: { id_avis: id }
    }).then(data => {
        if (data[0] === 1) {
            res.send({
                message: "Guest_book was updated successfully."
            });
        } else {
            res.send({
                message: `Cannot update Guest_book with id=${id}. Maybe Guest_book was not found or req.body is empty!`
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
    Guest_book.destroy({
        where: { id_avis: id }
    }).then(data => {
        if (data === 1) {
            res.send({
                message: "Guest_book was deleted successfully!"
            });
        } else {
            res.send({
                message: `Cannot delete Guest_book with id=${id}. Maybe Guest_book was not found!`
            });
        }
    }).catch(e => {
        res.status(500).send({
            message: e.message || "Some error occurred."
        });
    });
}

export const removeAll = (req, res) => {
    Guest_book.destroy({
        where: {},
        truncate: false
    }).then(data => {
        res.send({ message: `${data} Guest_book were deleted successfully!` });
    }).catch(e => {
        res.status(500).send({
            message: e.message || "Some error occurred."
        });
    });
}
