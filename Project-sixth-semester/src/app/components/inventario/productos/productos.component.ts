import { Component, OnInit } from '@angular/core';
import { Products } from 'src/app/models/products';
import { Providers } from 'src/app/models/providers';
import { ProveedoresService } from 'src/app/services/proveedores.service';
import {ProductosService} from '../../../services/productos.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  productos:any=[];
  proveedores: any = [];
  produ:Products={
    id:0,
    nombre_pro:'',
    marca_pro:'',
    proveedor:'',
    precio:0,
  };
  prove: Providers = {
    id:0,
    nombre_prove: '',
    direccion_prove: '',
    cp_prove: 0,
    telefono_prove: 0,
  };

  
  // Seleccionamos o iniciamos el valor '0' del <select>
  opcionSeleccionado: string  = '0';
  verSeleccion: string        = '';

  constructor(private productService: ProductosService,
              private providerService: ProveedoresService) { }

  ngOnInit(): void {
   this.getProduct()
  }

  getProduct(){
    this.productService.getProducts().subscribe(
      res=>(this.productos=res)
    );
  }

  getProvider() {
    this.providerService.getProviders().subscribe(
      res => (this.proveedores = res));
  }

  saveProduct(){
    delete this.produ.id;
  this.productService.saveProduct(this.produ)
  .subscribe(
    res=>{
   console.log(res);
   this.getProduct();
    }
  );
  }

  productinfo(){
    this.productService.getProducts().subscribe(
      res=>(this.productos=res)
    );
  }

  deleteProduct(id: string){
    this.productService.deleteProduct(id).subscribe(
      res => {
        console.log(res);
        this.getProduct();
      },
      err => console.log(err)
    )
  }

  capturar() {
    // Pasamos el valor seleccionado a la variable verSeleccion
    this.verSeleccion = this.opcionSeleccionado;
  }

}
