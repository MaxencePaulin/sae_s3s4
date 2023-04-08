// const Express = require('express');
import dotenv from "dotenv";
// import URLSearchParams from 'url'; // can also use form-data
// import axios from 'axios';
import  {generateTokenForUser} from '../utils/jwtUtils.js'
// const axios = require('axios');
import axios from "axios";
// const path = require('path')
import bodyParser from 'body-parser';
import jwt from 'jsonwebtoken';
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
// require('dotenv').config();
const client_id = process.env.CLIENT_ID
const client_secret = process.env.CLIENT_SECRET
import session from 'express-session';
import connectFlash from "connect-flash"
import { connect } from 'http2';
import cookieParser from "cookie-parser"
// import serverRouter from Express.Router()
// const app = Express(); 
const port = process.env.PORT ;
const JWT_SECRET = process.env.JWT_SECRET ;
dotenv.config()
/* Make a function to give us configuration for the Discord API */
function make_config(authorization_token) { // Define the function
  let data = { // Define "data"
    headers: { // Define "headers" of "data"
      "Authorization": `Bearer ${authorization_token}` // Define the authorization
    }
  };
  return data; // Return the created object
};

// app.use(Express.urlencoded({ extended: false })); // configure the app to parse requests with urlencoded payloads
// app.use(Express.json()); // configure the app to parse requests with JSON payloads
// app.use(bodyParser.text());

// serverRouter.use(cookieParser(JWT_SECRET))
const jour = 1000*60*60*24
// serverRouter.use(session(
//   {secret:JWT_SECRET ,
//     cookie:{
//       maxAge: jour
//     },
//     resave: false ,
//     saveUninitializer: false
//     }
// ));

// serverRouter.use(connectFlash());
// serverRouter.use((req,res,next )=>{
//   res.locals.flashMessages = req.flash();
//   next()
// }); 

export const auth = (req,res)=> {
    console.log("toto")
    const data_1 = new URLSearchParams();
    data_1.append('client_id', client_id);
    data_1.append('client_secret', client_secret);
    data_1.append('grant_type', 'authorization_code');
    data_1.append('redirect_uri', `http://localhost:8080/`);
    data_1.append('scope', 'identify');
    data_1.append('code', req.body);
    console.log(req.body)
    fetch('https://discord.com/api/oauth2/token', { method: "POST", body: data_1 }).then(response => response.json()).then(data => {

        axios.get("https://discordapp.com/api/users/@me", make_config(data.access_token)).then(response => {
            if (!session.token) {
              const token = generateTokenForUser(response.data.username);
              session.token=token;
            }

            res.status(200).send({success: 1, data: {token:session.token}});
           }).catch(err => {
            console.log(err);
            res.sendStatus(500);   
          });
    });
}

// app.use("/", serverRouter)

// app.get('/', (req, res) => {
//     // console.log("this velvet glove");
//     res.sendFile(path.join(__dirname + '/index.html')); // Send the index.html file
//   });

// app.post('/user', (req, res) => {
//     // console.log("toto")
//     const data_1 = new URLSearchParams();
//     data_1.append('client_id', client_id);
//     data_1.append('client_secret', client_secret);
//     data_1.append('grant_type', 'authorization_code');
//     data_1.append('redirect_uri', `http://localhost:${port}`);
//     data_1.append('scope', 'identify');
//     data_1.append('code', req.body);
//     console.log(req.body)
//     fetch('https://discord.com/api/oauth2/token', { method: "POST", body: data_1 }).then(response => response.json()).then(data => {

//         axios.get("https://discord.com/api/users/@me", make_config(data.access_token)).then(response => {
//             if (!session.token) {
//               const token = generateTokenForUser(response.data.username);
//               session.token=token;
//             }

//             res.status(200).send({success: 1, data: {token:session.token}});
//            }).catch(err => {
//             console.log(err);
//             res.sendStatus(500);   
//           });
//     });
// });


// const generateTokenForUser = (user) => {
//   return jwt.sign(
//       {
//           id_user: 1,
//           id_role: 1,
//       },
//       process.env.JWT_SECRET,
//       {
//       expiresIn: "1h",
//       }
//   );
// }

// app.listen(port, function() {
//     console.log(`App listening! Link: http://localhost:${port}/`);
// });