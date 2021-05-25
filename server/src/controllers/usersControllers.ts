import { NextFunction, request, Request,Response} from 'express';
import pool from '../database'
const jwt=require('jsonwebtoken');
 export class UsersControllers{
   
   

    public async list(req:Request,res:Response){
        const users= await pool.query('SELECT *  FROM users');
       res.json(users);
       }

    public async gettoken(req:Request,res:Response){
        const {username, password}= req.body;
      const users= await pool.query('Select username,role from users where username=? and password=?',
        [username,password]);

       if(users.length>0){
        let data=JSON.stringify(users[0]);
        const token=jwt.sign(data,'stil');
        res.json({token});
       }else{
           res.json('usuario incorrecto');
       }
       }

       secretinfo=(req:Request,res:Response,next:NextFunction)=>{
        if(!req.headers.authorization)return res.status(401).json('no autorizado') 
        const token=req.headers.authorization.substr(7);
        if(token!==''){
          const content= jwt.verify(token,'stil');
          req.params=content;
          console.log(req.params);
          next();
       }else{
           res.json('token vacio')
       }
       }

       secret=(req:Request,res:Response)=>{
       res.json('informacion secreta')
       }
    }
    

const usersController = new UsersControllers();
export default usersController;