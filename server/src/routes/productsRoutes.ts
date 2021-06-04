import {Router} from 'express';
import productController from '../controllers/productsControllers'

class  ProductsRoutes{
    public router:Router = Router();

    constructor(){
  this.config();
    }
    config():void{
        this.router.get('/',productController.list); // listar todos los productos
        this.router.get('/:id',productController.getOne); //listar un producto
        this.router.post('/',productController.create); //crear producto
        this.router.put('/:id',productController.update); // editar producto
        this.router.delete('/:id',productController.delete);// eliminar producto
        
    }

}
export const productsRoutes= new ProductsRoutes();
export default productsRoutes.router;