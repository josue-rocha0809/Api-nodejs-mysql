import { Component, OnInit } from '@angular/core';
import { Products } from 'src/app/models/products';
import { Providers } from 'src/app/models/providers';
import { Inventario } from 'src/app/models/inventario';
import { ProveedoresService } from 'src/app/services/proveedores.service';
import { ProductosService } from '../../../services/productos.service';
import { InventarioService } from 'src/app/services/inventario.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css'],
})
export class ProductosComponent implements OnInit {
  productos: any = [];

  proveedores: Providers[] = [

  ];

  produ: Products = {
    id: null,
    nombre_pro: '',
    marca_pro: '',
    id_proveedor: 0,
    precio: 0,
    tipo:'',
  };

  inven: Inventario = {
    id_producto: null,
    cantidad_disp: 0,
  };

  edit: boolean = false;

  constructor(
    private productService: ProductosService,
    private providerService: ProveedoresService,
    private inventarioService: InventarioService,
    private activedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const params = this.activedRoute.snapshot.params;
    if (params.id) {
      this.productService.getProduct(params.id).subscribe(
        (res) => {
          console.log(res);
          this.produ = res;
          this.edit = true;
        },
        (err) => console.error(err)
      );
    }
    this.getProvider();
  }

  getProduct() {
    this.productService
      .getProducts()
      .subscribe((res) => (this.productos = res));
  }

  getProvider() {
    this.providerService
      .getProviders()
      .subscribe((res) => (this.proveedores = res));
  }




  saveProduct() {

    delete this.produ.id;
    this.productService.saveProduct(this.produ).subscribe((res) => {
      console.log(res);
      alert('producto Guardado');
      this.saveInventario();
      this.router.navigate(['/inventario']);
    });
  }

  updateProduct() {
    this.productService.updateProduct(this.produ.id!, this.produ).subscribe(
      (res) => {
        console.log(res);
        alert('Producto Actualizado');
        this.router.navigate(['/inventario']);
      },
      (err) => console.log(err)
    );
  }

  deleteProduct(id: string) {
    this.productService.deleteProduct(id).subscribe(
      (res) => {
        console.log(res);
        this.getProduct();
      },
      (err) => console.log(err)
    );
  }

  saveInventario() {
    this.inventarioService.saveInventario(this.inven).subscribe((res) => {
      console.log(res);
    });
  }
}
