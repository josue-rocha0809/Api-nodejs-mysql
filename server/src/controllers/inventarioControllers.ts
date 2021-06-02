import { Request,Response} from 'express';
import pool from '../database'

class InventarioControllers{
    

    public async list(req:Request,res:Response){
    const inventario= await pool.query('SELECT *FROM inventario');
       res.json(inventario);
    }

    public async create (req:Request,res:Response):Promise<void>{
      await pool.query('insert into inventario (id_producto) select MAX(p.id) as id from productos p');
      res.json({message:'Product saved'});
    } 

    
    public async update(req:Request,res:Response):Promise<void>{
      await pool.query('update inventario inv INNER JOIN (select id,id_producto, cantidad_de_ingreso from entradas order by id desc limit 1) lp ON inv.id_producto=lp.id_producto set inv.cantidad_disp= inv.cantidad_disp + lp.cantidad_de_ingreso');
      res.json({message:'the product was updated'})
    }

    

    public  async delete(req:Request,res:Response){
      console.log(req.params);
     const {id}= req.params;
     await pool.query('DELETE FROM inventario WHERE id_producto = ?',[id]);
     res.json({message:'the product was deleted'});
    }

    
    
    
  
}

const inventarioControllers = new InventarioControllers();
export default inventarioControllers;