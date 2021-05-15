import {Router} from 'express';
import providerController from '../controllers/providersControllers';

class  ProvidersRoutes{
    public router:Router = Router();

    constructor(){
  this.config();
    }
    config():void{
        this.router.get('/',providerController.list); // listar todo proveedor
        this.router.get('/:id',providerController.getOne); //listar un proveedor
        this.router.post('/',providerController.create); //crear proveedor
        this.router.put('/:id',providerController.update); // editar proveedor
        this.router.delete('/:id',providerController.delete);// eliminar proveedor
    
    }

}
export const providersRoutes= new ProvidersRoutes();
export default providersRoutes.router;