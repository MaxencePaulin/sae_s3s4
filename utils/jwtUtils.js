import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import UserGoogle from "../models/UserGoogle.model";
var GoogleStrategy =require('passport-google-oauth20')
const tokengoogle = require("./tokengoogle.json")
dotenv.config();


passport.use(new GoogleStrategy(
    {
    clientID:tokengoogle.web.client_id ,
    clientSecret: tokengoogle.web.client_secret, 
    callbackURL : "http://:3000/login"
    },
    async function ( accesToken , refreshToken , profil ,cb){

        const [user, created ] = await UserGoogle.findOrCreate(
            {where:{id_google : profil.id } , defaults :{
            email : profil.email,
            firstname : profil.firstname ,
            lastname : profil.lastname ,
            id_google : profil.id_google ,
        }});
        console.log(created)
    }
));

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