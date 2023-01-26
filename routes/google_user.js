import router from './service.router.js';

router.get('auth/google' , passport.authenticate('google' , {scope : ['profile']}))

router.get('/auth/google/callback' , 
passport.authenticate('google' , { failureRedirect:'/login'}),
function(req,res){
    res.redirect('/');
})

