import {Router} from 'express';
import resupplyController from '../controllers/resupplyControllers'

class  ResupplyRoutes{
    public router:Router = Router();

    constructor(){
  this.config();
    }
    config():void{
        this.router.get('/',resupplyController.list); // listar todo productos
        this.router.get('/:id',resupplyController.getOne); //listar un producto
        this.router.post('/',resupplyController.create); //crear producto
        this.router.put('/:id',resupplyController.update); // editar producto
        this.router.delete('/:id',resupplyController.delete);// eliminar producto
        this.router.delete('/pro/:id',resupplyController.deletePro);// eliminar producto
    }

}
export const resupplyRoutes= new ResupplyRoutes();
export default resupplyRoutes.router;