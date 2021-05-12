import { Component, OnInit } from '@angular/core';
import { Products } from 'src/app/models/products';
import {ProductosService} from '../../../services/productos.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  productos:any=[];
  produ:Products={
    id:0,
    nombre_pro:'',
    marca_pro:'',
    proveedor:'',
    precio:0,
  };

  constructor(private productService: ProductosService) { }

  ngOnInit(): void {
   this.productService.getProducts().subscribe(
     res=>(this.productos=res)
   );
  }
  saveProduct(){
    delete this.produ.id;
  this.productService.saveProduct(this.produ)
  .subscribe(
    res=>{
   console.log(res);
    }
  );
  }

  productinfo(){
    this.productService.getProducts().subscribe(
      res=>(this.productos=res)
    );
  }

}
