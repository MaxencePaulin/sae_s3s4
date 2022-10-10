let jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

exports.generateTokenForUser = (user) => {
    return jwt.sign(
        {
            id: user.id,
            is_moderator: user.is_moderator,
            is_admin: user.is_admin
        },
        process.env.JWT_SECRET,
        {
        expiresIn: "1h",
        }
    );
}

exports.verifyToken = (token) => {
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        let userId=-1;
        let is_moderator=false;
        let is_admin=false;
        if (err) {
            console.log(err);
        } else {
            console.log(decoded);
            userId = decoded.id;
            is_moderator = decoded.is_moderator;
            is_admin = decoded.is_admin;
        }
        return {userId, is_moderator, is_admin};
    });
}