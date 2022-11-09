import fs from "fs";
import { User } from "../models/users.model.js";

const test = (callback) => {
    try {
        return callback(null, "test user réussi");
    }catch (e) {
        console.log("error test");
        console.log(e);
        return callback("erreur", null);
    }
}

const saveUsers = (users) => {
    const dataJSON = JSON.stringify(users);
    fs.writeFileSync("data/users.json", dataJSON);
}

const lireUsers = () => {
    try {
        let dataBuffer = fs.readFileSync("data/users.json");
        const dataString= dataBuffer.toString();
        return JSON.parse(dataString);
    }
    catch (e){
        console.log("erreur lecture du fichier Users")
        console.log(e);
        return [];
    }
}

const addUser= (user , callback)=>{
   try { 
        let data = lireUsers();
        let maxId = getMaxId();
        let userObj=new User(maxId, 
            user.firstname,
            user.lastname,
            user.username,
            user.email ,
            user.password ,
            "guest" ,
            false ,
            true);
        saveUsers(data.push(userObj.JSON()));
        return callback(null,[])
    }
    catch(e){
        console.log(" erreur lors de l'ajout de l'utilisateur");
        console.log(e);
        return callback("impossible d'ajouter l'user",null)
    }
}

const deleteUser=(idUser , callback)=>{
    try {
        let data = lireUsers();
        const indexToDelete=data.find(id => data.id==idUser)
        data.splice(indexToDelete)
        saveUsers(data)
    }
    catch (e){
        console.log(" erreur lors de la suppression de l'utilisateur");
        console.log(e);
        return callback("impossible de supprimer l'user",null)
    }
}
    
function getMaxId(callback){
    let data = lireUsers();
    let maxId=0;
    if (data.length === 0){
        return callback("erreur lors de l'ouverture du fichier",null);
    }
    data.forEach((element) => {
        if (parseInt(element.id)>maxId){
            maxId=element.id;
        }
    })
    return maxId;
}

export default{
    test: test,
}