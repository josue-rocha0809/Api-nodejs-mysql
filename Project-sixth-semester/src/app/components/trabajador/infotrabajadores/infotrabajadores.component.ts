import { Component, OnInit } from '@angular/core';
import { Authentication } from 'src/app/models/authentication';
import {AutenticacionService} from '../../../services/autenticacion.service'
@Component({
  selector: 'app-infotrabajadores',
  templateUrl: './infotrabajadores.component.html',
  styleUrls: ['./infotrabajadores.component.css']
})
export class InfotrabajadoresComponent implements OnInit {

  

  aute: Authentication={
    id:0,
    nombre:'',
    contra:''
  }
  constructor(private autheticationService: AutenticacionService) { }

  ngOnInit(): void {
  }

  saveAut(){
    delete this.aute.id;
    this.autheticationService.saveAut(this.aute)
  .subscribe(
    res=>{
   console.log(res);
   
    }
  );
  }

}
