import {Router} from 'express';
import ventaProductosController from '../controllers/ventaProductosControllers';

class  VentaProductosRoutes{
    public router:Router = Router();

    constructor(){
  this.config();
    }
    config():void{
        this.router.patch('/',ventaProductosController.createVentaProductos); //crear producto
        
    
    }

}
export const ventaProductosRoutes= new VentaProductosRoutes();
export default ventaProductosRoutes.router;