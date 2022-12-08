// Imports
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import pg from 'pg';
import db from './db/db.js';
import bodyParser from 'body-parser';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import hbengine from 'express-handlebars';
import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import session from 'express-session';
import cookieParser from 'cookie-parser';

// Routes

import userRoutes from './routes/user.router.js';
import mainRoutes from './routes/main.router.js';

import auth from "./middleware/authenticate.js";

// Routes v2
import usersRoutes from './routes/_users.router.js';
import accessRoutes from './routes/access.router.js';
import artistRoutes from './routes/artist.router.js';
import boughtRoutes from './routes/bought.router.js';
import concertRoutes from './routes/concert.router.js';
import dateReserveRoutes from './routes/date_reserve.router.js';
import dateValidityTicketRoutes from './routes/date_validity_ticket.router.js';
import droitRoutes from './routes/droit.router.js';
import haveRoutes from './routes/have.router.js';
import makeRoutes from './routes/make.router.js';
import musicStyleRoutes from './routes/music_style.router.js';
import nationalityRoutes from './routes/nationality.router.js';
import origineArtistRoutes from './routes/origine_artist.router.js';
import origineUserRoutes from './routes/origine_user.router.js';
import placeRoutes from './routes/place.router.js';
import prestataireRoutes from './routes/prestataire.router.js';
import priceRoutes from './routes/price.router.js';
import proposeRoutes from './routes/propose.router.js';
import qrCodeRoutes from './routes/qr_code.router.js';
import reserveRoutes from './routes/reserve.router.js';
import roleRoutes from './routes/role.router.js';
import sceneRoutes from './routes/scene.router.js';
import serviceRoutes from './routes/service.router.js';
import socialNetworkRoutes from './routes/social_network.router.js';
import ticketRoutes from './routes/ticket.router.js';
import typePrestataireRoutes from './routes/type_prestataire.router.js';
import typeSceneRoutes from './routes/type_scene.router.js';
import virtualAccountRoutes from './routes/virtual_account.router.js';

// Database connection
db.authenticate().then(() => {
    console.log('Connection à la base avec sequelize réussie.');
}).catch((err) => {
    console.error('Impossible de se connecter à la base de données: '+ err);
});

// Instantiate server
const { Client } = pg;

const app = express();
dotenv.config();
const port = process.env.PORT;
const pg_user = process.env.PG_USER;
const pg_host = process.env.PG_HOST;
const pg_database = process.env.PG_DATABASE;
const pg_password = process.env.PG_PASSWORD;

export const client = new Client({
    user: pg_user,
    host: pg_host,
    database: pg_database,
    password: pg_password,
});

client.connect();
console.log(`Connecté à l'utilisateur [${pg_user}] dans la base [${pg_database}] sur le serveur [${pg_host}]`);

// temporaire pour le front
app.engine("hbs", hbengine.engine({
    defaultLayout: "main",
    extname: ".hbs"
}));

app.set("view engine", "hbs");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(cookieParser());

app.use(session({
    secret: 'secret',
    cookie: {maxAge: 1000 * 60 * 60 * 24}, // 1 jour
    saveUninitialized: false,
    resave: false,
    unset: 'destroy'
}));

app.use(cors({
    origin: [
        'http://localhost:8080',
    ],
    credentials: true,
    exposedHeaders: ['set-cookie']
}))

// temporaire vu que le front n'est pas encore fait
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
app.use(express.static(__dirname + '/public'));

// middleware
app.use((req, res, next) =>{
    console.log("URL : "+req.path);
    console.log("Browser: "+ 
        req.headers["user-agent"]);
    console.log("Language: "+
        req.headers["accept-language"]);
    console.log("IP: "+
        JSON.stringify(req.ip));
    next();
});

/** Swagger Initialization - START */
const swaggerOption = {
    swaggerDefinition: (swaggerJsdoc.Options = {
        openapi: '3.0.1', // on en a besoin pour l'authorization
        info: {
            title: "SAE S3S4",
            description: "API documentation",
            contact: {
                name: [
                    "Maxence PAULIN",
                    "Baptiste LAVAL",
                    "Antoine PERRIN",
                    "Antoine LACHAT",
                    "Taha MOUMEN"
                ],
            },
            servers: ["http://localhost:3000/"],
        },
        components : {
            securitySchemes : {
                bearerAuth : {
                    type : 'http',
                    scheme : 'bearer',
                    bearerFormat : 'JWT'
                }
            }
        },
        // security : [{        // Si on veut que l'authentification soit obligatoire pour toutes les routes
        //     bearerAuth : []
        // }]
    }),
    apis: ["server.js", "./routes/*.js"],
};
const swaggerDocs = swaggerJsdoc(swaggerOption);

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.use('/users', usersRoutes);
app.use('/access', accessRoutes);
app.use('/artist', artistRoutes);
app.use('/bought', boughtRoutes);
app.use('/concert', concertRoutes);
app.use('/datereserve', dateReserveRoutes);
app.use('/datevalidityticket', dateValidityTicketRoutes);
app.use('/droit', droitRoutes);
app.use('/have', haveRoutes);
app.use('/make', makeRoutes);
app.use('/musicstyle', musicStyleRoutes);
app.use('/nationality', nationalityRoutes);
app.use('/origineartist', origineArtistRoutes);
app.use('/origineuser', origineUserRoutes);
app.use('/place', placeRoutes);
app.use('/prestataire', prestataireRoutes);
app.use('/price', priceRoutes);
app.use('/propose', proposeRoutes);
app.use('/qrcode', qrCodeRoutes);
app.use('/reserve', reserveRoutes);
app.use('/role', roleRoutes);
app.use('/scene', sceneRoutes);
app.use('/service', serviceRoutes);
app.use('/socialnetwork', socialNetworkRoutes);
app.use('/ticket', ticketRoutes);
app.use('/typeprestataire', typePrestataireRoutes);
app.use('/typescene', typeSceneRoutes);
app.use('/virtualaccount', virtualAccountRoutes);

app.use("/user", userRoutes);
app.use("/", mainRoutes);

app.use("*", auth.authenticateData, (req, res, next) => {
    const err = new Error("Not Found");
    err.status = 404;
    next(err);
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    let username = req.user ? req.user.username : "";
    res.render("error404.hbs", {
        username: username
    });
});

db.sync().then(() => {
    app.listen(port, console.log(`Le serveur écoute sur le port ${port}`));
}).catch(err => console.log("Error: " + err));
