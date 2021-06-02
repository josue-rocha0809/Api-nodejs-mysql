import { Request,Response} from 'express';
import pool from '../database'

class ResupplyControllers{
    public async list(req:Request,res:Response){
     const resupply= await pool.query('SELECT *  FROM entradas');
    res.json(resupply);
    }

    public async getOne(req:Request,res:Response):Promise<any>{
      const { id }= req.params;
      const resupply=await pool.query('SELECT * FROM entradas  WHERE id = ?',[id]);
     if(resupply.length>0){
       return res.json(resupply[0]);
     }
      res.status(404).json({text:'the entrada doesnt exist'})
    }

    public async create (req:Request,res:Response):Promise<void>{
      await pool.query('INSERT INTO entradas set ?',[req.body])
      res.json({message:'Entrada saved'});
    } 
    
    public async update(req:Request,res:Response):Promise<void>{
      const {id}=req.params;
      await pool.query('UPDATE entradas set ? WHERE id= ?',[req.body, id]);
      res.json({message:'the entrada was updated'})
    
    }
    public  async delete(req:Request,res:Response){
     const {id}= req.params;
     await pool.query('DELETE FROM entradas WHERE id = ?',[id]);
     res.json({message:'the entrada was deleted'});
    }

    public  async deletePro(req:Request,res:Response){
      const {id}= req.params;
      await pool.query('DELETE FROM entradas WHERE id_producto = ?',[id]);
      res.json({message:'the entrada was deleted'});
     }

  
}

const resupplyController = new ResupplyControllers();
export default resupplyController;