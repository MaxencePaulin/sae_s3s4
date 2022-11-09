import userServices from '../services/user.service.js';

const test = (req, res) => {
    userServices.test((error, results) => {
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