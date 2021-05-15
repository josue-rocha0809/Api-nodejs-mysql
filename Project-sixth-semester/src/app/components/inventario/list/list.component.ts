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
    this.productService.getProducts().subscribe(res=>(this.producto = res));
  }
}
