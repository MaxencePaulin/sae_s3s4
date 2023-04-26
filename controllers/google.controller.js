import {passport} from "../server.js";

export const googleOauth = (req, res) => {
    console.log("googleOauth - Back")
    passport.authenticate(
        'google',
        { scope : ['profile', 'email']
        })
}

export const googleCallBack = (req, res) => {
    console.log("googleCallBack - Back")
    passport.authenticate('google', { failureRedirect: 'gOauth/error' }),
        function(req, res) {
            // Successful authentication, redirect success.
            res.redirect('/gOauth/success');
        }
}

export const gooSuccess = (req, res) => res.send(userProfile)

export const gooError = (req, res) => res.send("error logging in")