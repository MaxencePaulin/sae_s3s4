import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

export const generateTokenForUser = (user) => {
    return jwt.sign(
        {
            id_user: user.id_user,
            id_role: user.id_role,
        },
        process.env.JWT_SECRET,
        {
        expiresIn: "1h",
        }
    );
}

export const protect = async (req, res, next) => {
    let token;
    if (
        req.headers.authorization &&
        req.headers.authorization.startsWith("Bearer")
    ) {
        try {
            token = req.headers.authorization.split(" ")[1];
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            req.user = decoded;
            next();
        } catch (error) {
            console.error(error);
            res.status(401).send({
                success: 0,
                message: "Not authorized, token failed",
            });
        }
    }
    if (!token) {
        res.status(401).send({
            success: 0,
            message: "Not authorized, no token",
        });
    }
}