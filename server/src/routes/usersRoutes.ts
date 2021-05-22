import {Router} from 'express';
import usersController from '../controllers/usersControllers'
import pool from '../database';

class UsersRoutes{
    public router:Router = Router();

    constructor(){
        this.config();
        this.getToken();
        this.secretInfo();
        this.secret();
      
    }

    config():void{
        this.router.get('/',usersController.list); 
    }


  getToken():void{
        this.router.post('/singin',usersController.gettoken);
  }
  secretInfo():void{
    this.router.post('/test',usersController.secretinfo);
 } 
 secret():void{
    this.router.post('/test',usersController.secret);
 } 
 


     
  
}
export const usersRoutes= new UsersRoutes();
export default usersRoutes.router;


