import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AutenticacionService } from 'src/app/services/autenticacion.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private authService:AutenticacionService, private router:Router) { }

  ngOnInit(): void {
  }
 logout(){
  localStorage.removeItem('token');
  this.router.navigate(['login']);
 }
}
