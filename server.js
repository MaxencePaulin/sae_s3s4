// Imports
import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import hbengine from 'express-handlebars';
import { default as mainRoutes } from './routes/main.router.js';
import auth from "./middleware/authenticate.js";

// Instantiate server
const app = express();
dotenv.config();
const port = process.env.PORT;

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

app.listen(port, ()=>{
    console.log(`Le serveur ecoute sur port ${port}, lien : http://localhost:${port}`);
});