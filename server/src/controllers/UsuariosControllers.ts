import {Request, Response} from 'express';
import pool from '../database';


class UsuarioControllers{

    public async list(req:Request, res:Response){
        const users= await pool.query('SELECT * FROM users');
        res.json(users);
    }
    
    public async getOneUsuario(req:Request, res:Response){
       const { id }=req.params;
        const usuario = await pool.query('SELECT * FROM users WHERE id = ?',[id]);
        if(usuario.length>0){
            return res.json(usuario[0]);     
        }
        res.status(404).json({text:'the user dont exist'})
    }

    public async createUser(req:Request,res:Response){
        await pool.query('INSERT INTO users set ?',[req.body])
        res.json({message:'User saved'});
      }

      public  async deleteUser(req:Request,res:Response){
        console.log(req.params);
       const {id}= req.params;
       await pool.query('DELETE FROM users WHERE id = ?',[id]);
       res.json({message:'the User was deleted'});
      }



    
}
const usuarioControllers = new UsuarioControllers();
export default usuarioControllers;
