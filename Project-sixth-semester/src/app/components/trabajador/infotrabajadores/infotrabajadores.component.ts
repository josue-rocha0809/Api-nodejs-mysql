import { Component, OnInit } from '@angular/core';
import { Authentication } from 'src/app/models/authentication';
import { Users } from 'src/app/models/users';
import { TrabajadoresService } from 'src/app/services/trabajadores.service';
import {AutenticacionService} from '../../../services/autenticacion.service'
@Component({
  selector: 'app-infotrabajadores',
  templateUrl: './infotrabajadores.component.html',
  styleUrls: ['./infotrabajadores.component.css']
})
export class InfotrabajadoresComponent implements OnInit {


 trabajadores:any=[];

  user:  Users= {
  id:0,
  username: '',
  password: '',
  role:'',
};

  constructor(private trabajadoresService:TrabajadoresService) { }

  ngOnInit(): void {
    this.getTrabajadores();
  }
  getTrabajadores() {
   this.trabajadoresService.getTrabajadores().subscribe(
     res=>(this.trabajadores=res));
  }

  savedUser(){
    delete this.user.id;
    this.trabajadoresService.saveTrabajador(this.user).subscribe((res) => {
      console.log(res);
      alert('trabajador agregado')
      this.getTrabajadores();

    });
  }

  deleteUsuario(id: string) {
    this.trabajadoresService.deleteTrabajador(id).subscribe(
      (res) => {
        console.log(res);
        alert('trabajador eliminado')
        this.getTrabajadores();
      },
      (err) => console.log(err)
    );
  }



}
