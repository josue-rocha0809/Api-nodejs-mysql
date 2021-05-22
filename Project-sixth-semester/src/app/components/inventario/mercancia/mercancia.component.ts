import { Component, OnInit } from '@angular/core';
import { Products } from 'src/app/models/products';
import { Resupplys } from 'src/app/models/resupplys';
import { EntradasService } from 'src/app/services/entradas.service';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-mercancia',
  templateUrl: './mercancia.component.html',
  styleUrls: ['./mercancia.component.css']
})
export class MercanciaComponent implements OnInit {

  productos:any=[];
  entradas:any=[];

  produ:Products={
    id:null,
    nombre_pro:'',
    marca_pro:'',
    id_proveedor:0,
    precio:0,
  };

  entra:Resupplys={
    id:null,
    id_producto:0,
    cantidad_de_ingreso:0,
    fecha: new Date,
  };

  constructor(private resupplyService: EntradasService,
              private productService: ProductosService ) { }

  ngOnInit(): void {
    this.getResupply();
    this.getProduct();
  }

  getResupply(){
    this.resupplyService.getResupplys().subscribe(
      res => (this.entradas=res)
      
    );
    
  }

  saveResupply(){
    delete this.entra.fecha;
    delete this.entra.id;
    this.resupplyService.saveResupply(this.entra).subscribe(
      res => {
        console.log(res);
        
        this.getResupply();

      },
      err => console.error(err)
    ) 
  }

  
  getProduct(){
    this.productService.getProducts().subscribe(
      res=>(this.productos=res)
    );
  }
}
