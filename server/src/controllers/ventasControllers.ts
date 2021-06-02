import { request, Request,Response} from 'express';
import pool from '../database'

class VentasControllers{
    
  public async list(req:Request,res:Response){
    const ventas= await pool.query('SELECT *  FROM ventas');
   res.json(ventas);
   }

    public async createVenta (req:Request,res:Response):Promise<void>{
      await pool.query('INSERT INTO ventas set ?',[req.body])
      res.json({message:'Venta saved'});
    } 
    
    public async getId(req:Request,res:Response){
      const venta= await pool.query('SELECT * FROM ventas ORDER BY id DESC LIMIT 1;');
     res.json(venta);
     }
  
    public async update(req:Request,res:Response):Promise<void>{
      let inv: any = [];
      inv=Object.values(req.body);
      await pool.query('UPDATE inventario set cantidad_disp=cantidad_disp-? WHERE id_producto= ?',[inv[1],inv[0]]);
      res.json({message:'the inventario was updated'})
    
    }

    
}

const ventasController = new VentasControllers();
export default ventasController;