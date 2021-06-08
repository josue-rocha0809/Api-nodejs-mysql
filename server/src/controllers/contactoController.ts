import { Request,Response} from 'express';
import pool from '../database'

class contactoControllers{
public async send (req:Request,res:Response):Promise<void>{
    await pool.query('INSERT INTO contacto set ?',[req.body])
    res.json({message:'info send'});
  }
}

const contactoController = new contactoControllers();
export default contactoController;