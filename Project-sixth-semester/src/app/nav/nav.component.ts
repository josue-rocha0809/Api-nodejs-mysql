import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AutenticacionService } from 'src/app/services/autenticacion.service';
import {UsuariosService} from '../services/usuarios.service'
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(private router:Router,private authService:AutenticacionService,private usuarioService:UsuariosService) { }
  user ={
    username:null,
    password:null,
    role:null,
  }
  ngOnInit(): void {


  }
  logout(){
    localStorage.removeItem('token');
    this.router.navigate(['login']);
   }


}
