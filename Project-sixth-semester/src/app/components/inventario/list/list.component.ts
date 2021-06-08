import { Component, OnInit, PipeTransform } from '@angular/core';
import { Products } from 'src/app/models/products';
import { ProductosService } from '../../../services/productos.service';
import { InventarioService } from '../../../services/inventario.service';
import { EntradasService } from '../../../services/entradas.service';
import { Observable } from 'rxjs';
import { FormControl } from '@angular/forms';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  producto: Products[] = [];
  inventario: any = [];

  constructor(
    private productService: ProductosService,
    private inventarioService: InventarioService,
    private resupplyService: EntradasService
  ) {}

  ngOnInit() {
    this.getInventario();
    this.getProduct();
    
  }

  getProduct() {
    this.productService.getProducts().subscribe((res) => {
      this.producto = res;
      console.log(res);
      this.collectionSize=this.producto.length;
      this.refreshProductos();
    });
  }

  getInventario() {
    this.inventarioService.getInventario().subscribe((res) => {
      this.inventario = res;
      console.log(res);
    });
  }

  deleteProduct(id: string) {
    this.deletePro(id);
    this.deleteInventario(id);
    this.productService.deleteProduct(id).subscribe(
      (res) => {
        console.log(res);
        this.getProduct();
        this.getInventario();
      },
      (err) => console.log(err)
    );
  }

  deleteInventario(id: string) {
    this.inventarioService.deleteInventario(id).subscribe(
      (res) => {
        console.log(res);
      },
      (err) => console.log(err)
    );
  }

  deletePro(id: string) {
    this.resupplyService.deletePro(id).subscribe(
      (res) => {
        console.log(res);
      },
      (err) => console.log(err)
    );
  }

  page:number = 1;
  pageSize:number = 4;
  collectionSize:number;
  item: any=[];

  refreshProductos() {
    this.item = this.producto
      .map((pro, i:number) => ({id: i + 1, ...pro }))
      .slice(
        (this.page - 1) * this.pageSize,
        (this.page - 1) * this.pageSize + this.pageSize
      );
  }
}
