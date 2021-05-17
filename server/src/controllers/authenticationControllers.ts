import { Request,Response} from 'express';
import pool from '../database'
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;


class AuthenticationControllers{

   
       public async create (req:Request,res:Response):Promise<void>{
         
         res.json({message:'User saved'});
         passport.use('local.signup',new LocalStrategy({
          usernameField: 'nombre',
          passwordField:'contra',
          passReqToCallback: true
      }, async (req: { body: any; }, nombre: any, contra: any, done: any) =>{
          console.log(req.body);
      }));
         
       } 
       
       

}

const authenticationController= new AuthenticationControllers();
export default authenticationController;