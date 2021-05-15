import {Request, Response} from 'express';
import pool from '../database';

class ProvidersControllers{

    public async list(req:Request, res:Response){
        const providers= await pool.query('SELECT * FROM proveedores');
        res.json(providers);
    }

    public async getOne(req:Request, res:Response):Promise<any>{
        const{id}=req.params;
        const providers= await pool.query('SELECT * FROM proveedores WHERE id = ?', [id]);
        if(providers.lenght>0){
            return res.json(providers[0]);
        }
        res.status(404).json({text:'the provider doesnt exist'})
    }

    public async create(req:Request, res:Response):Promise<void>{
        await pool.query('INSERT INTO proveedores set ?', [req.body])
        res.json({message:'Provider saved'});
    }

    public async update(req:Request,res:Response):Promise<void>{
        const {id}=req.params;
        await pool.query('UPDATE proveedores set ? WHERE id= ?',[req.body, id]);
        res.json({message:'the provider was updated'})
      
    }

      public  async delete(req:Request,res:Response){
       const {id}= req.params;
       await pool.query('DELETE FROM proveedores WHERE id = ?',[id]);
       res.json({message:'the provider was deleted'});
    }
    
}

const providerController = new ProvidersControllers();
export default providerController;