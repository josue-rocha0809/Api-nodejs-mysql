import {Router} from 'express';
import contactoController from '../controllers/contactoController'

class contactoRoutes{
   
    public router:Router = Router();
   
    constructor(){
        this.config();
    }
    config():void{
        this.router.post('/',contactoController.send); //crer mensaje
    }

}
export const contactosRoutes= new contactoRoutes();
export default contactosRoutes.router;


