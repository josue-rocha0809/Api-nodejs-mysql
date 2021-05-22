import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { Users } from 'src/app/models/users';

import { AutenticacionService } from 'src/app/services/autenticacion.service';
import {UsuariosService} from '../../services/usuarios.service'


//import { loginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 inputUsername='';
 inputPassword='';
  User:any=[];

  user ={
    username:null,
    password:null,
    role:null,
  }

  use:Users={
    id:0,
    username:'',
    password:'',
    role:'',
  };

  //constructor(private loginService: loginService) { }
  constructor(private router:Router,
              private authService:AutenticacionService,
              private activedRoute: ActivatedRoute,
              private usuarioService:UsuariosService
              )
              {

  }
  ngOnInit(): void {

      this.usuarioService.getUsuarios()
      .subscribe(
        res =>{
          console.log(res);
          this.User=res;
        },
        err=> console.error(err)
      )

  }

 // getProduct(){
   // this.usuarioService.getOneUser().subscribe(
    //  res=>(this.User=res)
    //);
  //}


  onLogin(){
  console.log(this.user);
  this.authService.singin(this.user).subscribe( (res:any)=>{
    console.log(res);
    localStorage.setItem('token',res.token);
    if(this.user.role=='admin'){
      this.router.navigate(['administrador']);
    }else this.router.navigate(['cajero']);
  })
  }

}
