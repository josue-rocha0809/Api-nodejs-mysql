import { Component, OnInit } from '@angular/core';
import { Products } from 'src/app/models/products';
import {ProductosService} from '../../../services/productos.service'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  producto: any = [];

  constructor(private productService:ProductosService) { }

  ngOnInit(){
    this.getProduct();
  }
  
  getProduct(){
    this.productService.getProducts().subscribe(
      res=>(this.producto=res)
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
}
