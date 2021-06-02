import { Request,Response} from 'express';
import pool from '../database'

class VentaProductosControllers{
    

    public async createVentaProductos (req:Request,res:Response):Promise<void>{
      await pool.query('INSERT INTO venta_producto set ?',[req.body])
      res.json({message:'Venta saved'});
    } 
    

    
}

const ventaProductosController = new VentaProductosControllers();
export default ventaProductosController;