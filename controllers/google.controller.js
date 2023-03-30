
export const googleOauth = (req, res) => res.send("googleOauth - Back")

/*
{
    console.log("googleOauth - Back")
    passport.authenticate(
        'google',
        { scope : ['profile', 'email']
        }).catch(e => {
        res.status(500).send({
            message: e.message || "Some error occurred."
        });
    });
}*/

export const googleCallBack = (req, res) => res.send("googleCallBack - Back")

/*
{
console.log("googleCallBack - Back")
passport.authenticate('google', { failureRedirect: '/error' }),
    function(req, res) {
        // Successful authentication, redirect success.
        res.redirect('/success');
    }.catch(e => {
        res.status(500).send({
            message: e.message || "Some error occurred."
        });
    });
}
*/
export const gooSuccess = (req, res) => res.send(userProfile)

export const gooError = (req, res) => res.send("error logging in")