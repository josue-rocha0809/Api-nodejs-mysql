import { Products } from "./products";

export class CartitemModel{
    productId:null;
  productName:String;
  productMarca:String;
  productTipo:String;
  productProveedor:number;
  productPrecio:number;
  qty:number;


  constructor(product: Products){
      this.productId=product.id!;
      this.productName=product.nombre_pro!;
      this.productMarca=product.marca_pro!;
      this.productTipo=product.tipo!;
      this.productProveedor=product.id_proveedor!;
      this.productPrecio=product.precio!;
      this.qty=1;
  }
}