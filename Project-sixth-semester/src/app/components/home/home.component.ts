import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 infoWeb:boolean=true;
 infoLugar:boolean=true;
 infoSeguridad:boolean=true;
 infoRoles:boolean=true;
 infoAcceso:boolean=true;
 infoSoporte:boolean=true;

  constructor() { }

  ngOnInit(): void {
  }
 openInfoWeb(){
  this.infoLugar=true;
  this.infoSeguridad=true;
  this.infoRoles=true;
  this.infoAcceso=true;
  this.infoSoporte=true;

  if(this.infoWeb==true){
    this.infoWeb=false;
  }else if(this.infoWeb==false){
    this.infoWeb=true;
  }
 }
 openInfoLugar(){
  this.infoWeb=true;
  this.infoSeguridad=true;
  this.infoRoles=true;
  this.infoAcceso=true;
  this.infoSoporte=true;

  if(this.infoLugar==true){
    this.infoLugar=false;
  }else if(this.infoLugar==false){
    this.infoLugar=true;
  }
 }
 openInfoSeguridad(){
  this.infoWeb=true;
  this.infoLugar=true;
  this.infoRoles=true;
  this.infoAcceso=true;
  this.infoSoporte=true;
  if(this.infoSeguridad==true){
    this.infoSeguridad=false;
  }else if(this.infoSeguridad==false){
    this.infoSeguridad=true;
  }
 }
 openInfoRoles(){
  this.infoWeb=true;
  this.infoLugar=true;
  this.infoSeguridad=true;
  this.infoAcceso=true;
  this.infoSoporte=true;
  if(this.infoRoles==true){
    this.infoRoles=false;
  }else if(this.infoRoles==false){
    this.infoRoles=true;
  }
 }
 openInfoAcceso(){
  this.infoWeb=true;
  this.infoLugar=true;
  this.infoSeguridad=true;
  this.infoRoles=true;
  this.infoSoporte=true;
  if(this.infoAcceso==true){
    this.infoAcceso=false;
  }else if(this.infoAcceso==false){
    this.infoAcceso=true;
  }
 }
 openInfoSoporte(){
  this.infoWeb=true;
  this.infoLugar=true;
  this.infoSeguridad=true;
  this.infoRoles=true;
  this.infoAcceso=true;
  if(this.infoSoporte==true){
    this.infoSoporte=false;
  }else if(this.infoSoporte==false){
    this.infoSoporte=true;
  }
 }

 



}
