import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminComponent } from 'src/app/components/administrador/admin/admin.component';
//import { loginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  //constructor(private loginService: loginService) { }
  constructor(private router:Router){

  }
  ngOnInit(): void {
  }

  onLogin(form: NgForm){
    const email = form.value.email;
    const password = form.value.password;
    if(email=='josue.rocha0809@gmail.com'){
    this.router.navigate(['administrador']);
    }else{
      this.router.navigate(['cajero']);
    }
  }

}
