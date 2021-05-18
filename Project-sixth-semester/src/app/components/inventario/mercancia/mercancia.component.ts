import { Component, OnInit } from '@angular/core';
import { Products } from 'src/app/models/products';

@Component({
  selector: 'app-mercancia',
  templateUrl: './mercancia.component.html',
  styleUrls: ['./mercancia.component.css']
})
export class MercanciaComponent implements OnInit {

  productos:any=[];

  produ:Products={
    id:null,
    nombre_pro:'',
    marca_pro:'',
    id_proveedor:0,
    precio:0,
  };

  constructor() { }

  ngOnInit(): void {
  }

}
