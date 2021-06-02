import {Router} from 'express';
import ventasController from '../controllers/ventasControllers';

class  VentasRoutes{
    public router:Router = Router();

    constructor(){
  this.config();
    }
    config():void{
        this.router.get('/',ventasController.list);
        this.router.post('/',ventasController.createVenta); //crear producto
        this.router.get('/',ventasController.getId); //listar un producto
        this.router.put('/',ventasController.update);
        
    
    }

}
export const ventasRoutes= new VentasRoutes();
export default ventasRoutes.router;