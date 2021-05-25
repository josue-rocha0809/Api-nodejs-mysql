import { Component, OnInit } from '@angular/core';
import { Products } from 'src/app/models/products';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  producto: Products[] = [];

  constructor(private productService: ProductosService) {}

  ngOnInit(): void {
    this.getProduct();
  }

  getProduct() {
    this.productService.getProducts().subscribe((res) => {
      this.producto = res;
      console.log(res);
    });
  }
}
