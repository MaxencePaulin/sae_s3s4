// Imports
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
// path.join(__dirname,)
const dotenv = require("dotenv");
const mainRoutes = require("./routes/main.router.js");
const hbengine = require("express-handlebars");

// Instantiate server
const app = express();
dotenv.config();
const port = process.env.PORT;

app.engine("hbs", hbengine.engine({
    defaultLayout: "main",
    extname: ".hbs"
}));

app.set("view engine", "hbs");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

// Middleware
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

app.use("*",(req, res, next) => {
    const err = new Error("Not Found");
    err.status = 404;
    next(err);
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.render("error404.hbs");
});

app.listen(port, ()=>{
    console.log(`Le serveur ecoute sur port ${port}`);
});