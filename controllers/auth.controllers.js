const dotenv= require("dotenv");
dotenv.config();
// const datasource = process.env.DATASOURCE;
const authService = require("../services/auth.service.js");

// GET
// To complet
exports.listData = ((req , res, next)=> {
    if (error){
        return res.status(400).send({success:0 , data: errorr});
    }
    else {
        console.log(success)
        return res.status(200).send({success:1 , data: results});
    }
})

