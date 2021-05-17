import {Router} from 'express';
import authenticationController from '../controllers/authenticationControllers';

const passport= require('passport');

class AuthenticationRoutes{

    public router: Router= Router();
    
    constructor(){
        this.config();
    }

    config():void{
        
        

        
        this.router.post('/',authenticationController.create, passport.authenticate('local.signup',{
                successRedirect:'../../../',
                failureRedirect:'/'
            
         
        }));
    }
}

const authenticationRoutes= new AuthenticationRoutes();

export default authenticationRoutes.router;