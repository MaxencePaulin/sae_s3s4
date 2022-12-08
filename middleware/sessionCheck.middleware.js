import dotenv from "dotenv";
import jwt from "jsonwebtoken";
import model from "../models/index.js";
const Users = model.Users;

dotenv.config();

export const authenticateToken = (req, res, next) => {
    const token = req.session.token;
    if (!token) {
        return res.status(401).send({ message: "Unauthorized" });
    }
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
            return res.status(403).send({ message: "Forbidden" });
        }
        req.user = decoded;
        Users.findByPk(decoded.id).then(data => {
            req.user = {
                id: data.id,
                id_role: data.id_role,
                iat: decoded.iat,
                exp: decoded.exp,
                username: data.username,
            };
            next();
        }).catch(e => {
            console.log(e);
            return res.status(500).send({
                message: e.message || "Some error occurred."
            });
        });
    });
}