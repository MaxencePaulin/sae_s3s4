let jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

exports.generateTokenForUser = (user) => {
    return jwt.sign(
        {
            id: user.id,
        },
        process.env.JWT_SECRET,
        {
        expiresIn: "1h",
        }
    );
}