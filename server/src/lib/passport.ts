const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

passport.use('local.signup',new LocalStrategy({
    usernameField: 'nombre',
    passwordField:'contra',
    passReqToCallback: true
}, async (req: { body: any; }, nombre: any, contra: any, done: any) =>{
    console.log(req.body);
}));

/*passport.serializeUser((usr: any, done: any)=>{
    
});*/