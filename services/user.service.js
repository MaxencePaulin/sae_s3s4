const e = require("express");
const fs = require("fs") ;
const { User } = require("../models/users.model");

const test = (callback) => {
    try {
        return callback(null, "test user réussi");
    }catch (e) {
        console.log("error test");
        console.log(e);
        return callback("erreur", null);
    }
}
const addUser= (req , callback)=>{
   try { 
        let data = data();
        let maxId = getMaxId();
        let userObj=new User(maxId, 
            req.body.firstname, 
            req.body.lastname,
            req.body.username,
            req.body.email ,
            req.body.password ,
            "guest" ,
            false ,
            true);
        saveUser(data.push(userObj.JSON()));
        return callback(null,[])
    }
    catch(e){
        console.log(" erreur lors de l'ajout de l'utilisateur");
        console.log(e);
        return callback(e,[])
    }
}

function getMaxId(){
    let data= data();
    let tab_id=[];
    if (data="erreur lors de l'ouverture du fichier"){
        return callback("erreur lors de l'ouverture du fichier",null);
    }
    for (const user of data) {
        tab_id.push(parseInt(user.id));
    }
    let maxId = Math.max(tab_id);
    return maxId+1;
}

function data(){
    try {
        let datas = fs.readFileSync("data/users.json");
        const data_string=datas.toString();
        datas=JSON.parse(data_string);
        return datas
    }
    catch (e){
        return "erreur lors de l'ouverture du fichier"
    }
}
const saveUsers = (users) => {
    const dataJSON = JSON.stringify(users);
    fs.writeFileSync("data/users.json", dataJSON);
}

module.exports = {
    test: test,
}