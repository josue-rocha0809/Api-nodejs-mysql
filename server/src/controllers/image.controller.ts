import {Request, Response} from 'express';
import pool from '../database';

class ImageControllers{

  
  public async createUser(req:Request,res:Response){
  //  await pool.query('INSERT INTO users set ?',[req.body])
   
  console.log(req.body);
  
  res.json({message:'User saved'});
  }

}
const imageControllers = new ImageControllers();
export default imageControllers;
