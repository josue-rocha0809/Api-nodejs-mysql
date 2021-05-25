import {Router} from 'express';
import imageControllers from '../controllers/image.controller';


class  ImageRoutes{
    public router:Router = Router();

    constructor(){
        this.config();
    }

    config(){
        this.router.post('/',imageControllers.createUser)
    }
}

export const imageRoutes= new ImageRoutes();
export default imageRoutes.router;