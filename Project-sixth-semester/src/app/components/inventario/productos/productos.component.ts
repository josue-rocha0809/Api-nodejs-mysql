import { Component, OnInit } from '@angular/core';
import { Products } from 'src/app/models/products';
import { Providers } from 'src/app/models/providers';
import { ProveedoresService } from 'src/app/services/proveedores.service';
import {ProductosService} from '../../../services/productos.service';
import {ActivatedRoute, Router} from '@angular/router';
@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  productos:any=[];
  proveedores: Providers[] = [
    {
      id:0,
      nombre_prove: '',
      direccion_prove: '',
      cp_prove: 0,
      telefono_prove: 0,
    }
  ];

  produ:Products={
    id:0,
    nombre_pro:'',
    marca_pro:'',
    proveedor:'',
    precio:0,
  };

  edit:boolean=false;
  
  
  constructor(private productService: ProductosService,
              private providerService: ProveedoresService,
              private activedRoute: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
   
   
   const params= this.activedRoute.snapshot.params;
    if(params.id){
      this.productService.getProduct(params.id)
      .subscribe(
        res =>{
          console.log(res);
          this.produ=res;
          this.edit=true;
        },
        err=> console.error(err)
      )
    }
    this.getProvider();  
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
   this.router.navigate(['/invantario']);
    }
  );
  }

  updateProduct(){
    this.productService.updateProduct(this.produ.id!, this.produ)
    .subscribe(
      res => {
        console.log(res);
      },
      err => console.log(err)
    )
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
