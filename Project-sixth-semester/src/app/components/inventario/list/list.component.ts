import { Component, OnInit } from '@angular/core';
import { Products } from 'src/app/models/products';
import { ProductosService } from '../../../services/productos.service';
import { InventarioService } from '../../../services/inventario.service';
import { EntradasService } from '../../../services/entradas.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  producto: any = [];
  inventario: any = [];

  constructor(
    private productService: ProductosService,
    private inventarioService: InventarioService,
    private entradasService: EntradasService
  ) {}

  ngOnInit() {
    this.getInventario();
    this.getProduct();
    
  }

  getProduct() {
    this.productService.getProducts().subscribe((res) => {
      this.producto = res;
      console.log(res);
    });
  }

  getInventario() {
    this.inventarioService.getInventario().subscribe((res) => {
      this.inventario = res;
      console.log(res);
    });
  }

  deleteProduct(id: String) {
    this.deleteEntrada(id);
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

  deleteInventario(id: String) {
    this.inventarioService.deleteInventario(id).subscribe(
      (res) => {
        console.log(res);
      },
      (err) => console.log(err)
    );
  }

  deleteEntrada(id: String) {
    this.entradasService.deleteResupply(id).subscribe(
      (res) => {
        console.log(res);
      },
      (err) => console.log(err)
    );
  }
}
