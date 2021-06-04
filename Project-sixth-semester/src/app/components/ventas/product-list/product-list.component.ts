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
      this.collectionSize=this.producto.length;
      this.refreshProductos();
    });
  }

  page:number = 1;
  pageSize:number = 2;
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
