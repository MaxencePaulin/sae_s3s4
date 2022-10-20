const dotenv = require("dotenv");
const jwt = require("jsonwebtoken");
const {lireIdUsers} = require("../services/users.service");
dotenv.config();

exports.authenticateData = (req, res, next) => {
    // const token = req.headers["authorization"];
    // recuperer le token stocker en cookie

    const token = req.headers.cookie
        ? req.headers.cookie
            .split(";")
            .filter((cookie) => cookie.startsWith("token="))[0]
            .slice(6)
        : null;
    if (!token) {
        next();
    }else {
        jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
            if (err) {
                next();
            }
            req.user = decoded;
            lireIdUsers(decoded.id,(error, results) => {
                if (error) {
                    return res.status(400).send({success: 0, data: error});
                }
                req.user = {
                    id: decoded.id,
                    iat: decoded.iat,
                    exp: decoded.exp,
                    username: results[0].username,
                };
                next();
            });
        });
    }
}

exports.logged = (req, res, next) => {
    // const token = req.headers["authorization"];
    // recuperer le token stocker en cookie

    const token = req.headers.cookie
        ? req.headers.cookie
            .split(";")
            .filter((cookie) => cookie.startsWith("token="))[0]
            .slice(6)
        : null;
    if (!token) {
        next();
    }else {
        let username = req.user ? req.user.username : "";
        res.render("logged", {
            username: username,
        });
    }
}

exports.authenticateToken = (req, res, next) => {
    // const token = req.headers["authorization"];

    const token = req.headers.cookie
        ? req.headers.cookie
            .split(";")
            .filter((cookie) => cookie.startsWith("token="))[0]
            .slice(6)
        : null;
    console.log(token);
    if (!token) {
        console.log("test")
        return res.status(401).send({success: 0, data: "Access denied"});
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
            return res.status(401).send({success: 0, data: "Access denied"});
        }
        req.user = decoded;
        next();
    });
};

exports.authenticateAdmin = (req, res, next) => {
    // const token = req.headers["authorization"];
    // recuperer le token stocker en cookie

    const token = req.headers.cookie
        ? req.headers.cookie
            .split(";")
            .filter((cookie) => cookie.startsWith("token="))[0]
            .slice(6)
        : null;
    if (!token) {
        return res.status(401).send({success: 0, data: "Access denied"});
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
            return res.status(401).send({success: 0, data: "Access denied"});
        }
        req.user = decoded;
        lireIdUsers(decoded.id,(error, results) => {
            if (error) {
                return res.status(400).send({success: 0, data: error});
            }
            if (results[0].is_admin === true) {
                next();
            } else {
                return res.status(401).send({success: 0, data: "Access denied"});
            }
        });
    });
}

exports.authenticateGuest = (req, res, next) => {
    // const token = req.headers["authorization"];
    // recuperer le token stocker en cookie

    const token = req.headers.cookie
        ? req.headers.cookie
            .split(";")
            .filter((cookie) => cookie.startsWith("token="))[0]
            .slice(6)
        : null;
    if (!token) {
        return res.status(401).send({success: 0, data: "Access denied"});
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
            return res.status(401).send({success: 0, data: "Access denied"});
        }
        req.user = decoded;
        lireIdUsers(decoded.id,(error, results) => {
            if (error) {
                return res.status(400).send({success: 0, data: error});
            }
            if (results[0].is_guest === true || results[0].is_admin === true) {
                next();
            } else {
                return res.status(401).send({success: 0, data: "Access denied"});
            }
        });
    });
}


