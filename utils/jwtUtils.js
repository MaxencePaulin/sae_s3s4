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