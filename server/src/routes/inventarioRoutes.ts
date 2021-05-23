import {Router} from 'express';
import inventarioController from '../controllers/inventarioControllers'

class  InventarioRoutes{
    public router:Router = Router();

    constructor(){
  this.config();
    }
    config():void{
        this.router.get('/',inventarioController.list); 
        this.router.post('/',inventarioController.create); 
        this.router.put('/',inventarioController.update); 
        
        
    }

}
export const inventarioRoutes= new InventarioRoutes();
export default inventarioRoutes.router;