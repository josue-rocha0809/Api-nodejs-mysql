import { Component, OnInit } from '@angular/core';
import { Products } from 'src/app/models/products';
import { Resupplys } from 'src/app/models/resupplys';
import { EntradasService } from 'src/app/services/entradas.service';
import { ProductosService } from 'src/app/services/productos.service';
import { InventarioService } from 'src/app/services/inventario.service';

@Component({
  selector: 'app-mercancia',
  templateUrl: './mercancia.component.html',
  styleUrls: ['./mercancia.component.css'],
})
export class MercanciaComponent implements OnInit {
  productos: any = [];
  entradas: Resupplys[] = [];

  produ: Products = {
    id: null,
    nombre_pro: '',
    marca_pro: '',
    tipo: '',
    id_proveedor: 0,
    precio: 0,
  };

  entra: Resupplys = {
    id: null,
    id_producto: 0,
    cantidad_de_ingreso: 0,
    fecha: new Date(),
  };

  constructor(
    private resupplyService: EntradasService,
    private productService: ProductosService,
    private inventarioService: InventarioService
  ) {}

  ngOnInit(): void {
    this.getResupply();
    this.getProduct();
  }

  getResupply() {
    this.resupplyService.getResupplys().subscribe((res) => {
      this.entradas = res;
      this.collectionSize = this.entradas.length;
      this.refreshProductos();
    });
  }

  saveResupply() {
    delete this.entra.id;
    delete this.entra.fecha;
    this.resupplyService
      .saveResupply(this.entra)
      .subscribe((res) => console.log(res));
    this.updateInventario();
    this.getResupply();
    location.reload();
  }

  deleteResupply(id: string) {
    this.resupplyService.deleteResupply(id).subscribe(
      (res) => {
        console.log(res);
        this.getResupply();
      },
      (err) => console.log(err)
    );
  }

  getProduct() {
    this.productService
      .getProducts()
      .subscribe((res) => (this.productos = res));
  }

  updateInventario() {
    this.inventarioService.updateInventario(this.produ).subscribe((res) => {
      console.log(res);
    });
  }

  page: number = 1;
  pageSize: number = 4;
  collectionSize: number;
  item: any = [];

  refreshProductos() {
    this.item = this.entradas
      .map((pro, i: number) => ({ id: i + 1, ...pro }))
      .slice(
        (this.page - 1) * this.pageSize,
        (this.page - 1) * this.pageSize + this.pageSize
      );
  }
}
