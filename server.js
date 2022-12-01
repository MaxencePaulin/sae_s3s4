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

// Routes
import sceneRoutes from './routes/scene.router.js';
import userRoutes from './routes/user.router.js';
import mainRoutes from './routes/main.router.js';

import auth from "./middleware/authenticate.js";

// Routes v2
import usersRoutes from './routes/_users.router.js';
import router from "./routes/main.router.js";

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

// cors
app.use(cors("*"));

// temporaire pour le front
app.engine("hbs", hbengine.engine({
    defaultLayout: "main",
    extname: ".hbs"
}));

app.set("view engine", "hbs");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

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
    }),
    apis: ["server.js", "./routes/*.js"],
};
const swaggerDocs = swaggerJsdoc(swaggerOption);

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.use('/users', usersRoutes);

app.use("/scene", sceneRoutes);
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