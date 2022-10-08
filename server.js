const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
// path.join(__dirname,)
const dotenv = require("dotenv");
const ownersRoutes = require("./routes/owners.router.js");
const scenesRoutes = require("./routes/scenes.router.js");
const hbengine = require("express-handlebars");
dotenv.config();

const port = process.env.PORT;
const app = express();

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

app.engine("hbs", hbengine.engine({
    defaultLayout: "main",
    extname: ".hbs"
}));

app.set("view engine", "hbs");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Middleware
app.use((req, res, next) =>{
    console.log("Browser: "+ 
        req.headers["user-agent"]);
    console.log("Language: "+
        req.headers["accept-language"]);
    console.log("IP: "+
        JSON.stringify(req.ip));
    next();
});

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.use("/owners", ownersRoutes);
app.use("/api/owners", (req, res) => {
    res.redirect("/owners");
});

app.use("/scenes", scenesRoutes);
app.use("/api/scenes", (req, res) => {
    res.redirect("/scenes");
});

app.get("/favicon.ico", (req, res) => {
    res.status(204);
});

app.get("/", (req, res) => {
    res.render("home", {
        posts: [
            {
                author: "Maxence",
                image: "https://picsum.photos/500/500",
                comments: ["En cours de développement"]
            }

        ]
    });
});

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