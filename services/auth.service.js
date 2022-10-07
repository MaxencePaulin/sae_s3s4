const fs = require("fs")


const logIn = (callback)=> {
   try{
        var myfile = fs.getFile("logIn.hbs")
        if (myfile){
            console.log("ok")
        }
   }
   catch (e){
        console.log("error login")
        console.log(e);
        return callback("error to fetch the page")
   }
}
