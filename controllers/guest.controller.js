import guestServices from '../services/guest.service.js';

const test = (req, res) => {
    guestServices.test((error, results) => {
        if (error) {
            return res.status(400).send({ success: 0, data: error });
        }
        const tokenDecode = req.user;
        return res.status(200).send({ success: 1, data: [results, tokenDecode] });
    });
}

export default {
    test: test
}