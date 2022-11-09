import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

export const generateTokenForUser = (user) => {
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