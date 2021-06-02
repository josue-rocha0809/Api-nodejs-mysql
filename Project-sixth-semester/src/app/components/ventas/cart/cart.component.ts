import { Component, OnInit } from '@angular/core';
import { CartitemModel } from 'src/app/models/cart-item-model';
import { Products } from 'src/app/models/products';
import { VentasService} from 'src/app/services/ventas.service';
import { MessageService } from 'src/app/services/message.service';
import { StorageService } from 'src/app/services/storage.service';
import {IPayPalConfig, ICreateOrderRequest } from 'ngx-paypal';
import { environment } from 'src/environments/environment';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap'
import { ModalComponent } from '../modal/modal.component';

import { NgxSpinnerService } from "ngx-spinner";
import { InventarioService } from 'src/app/services/inventario.service';
import { Ventas } from 'src/app/models/ventas';
import { VentaProductosService } from 'src/app/services/ventaProductos.service';
import { Venta_producto } from 'src/app/models/ventaProductos';
import { Inventario } from 'src/app/models/inventario';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  inventario: any=[];
  ventas: any = [];
  ventas2: any=[];
  vent: Ventas = {
    id: null,
    cantidad_de_productos:0,
    fecha: new Date,
    total:0,
    
  };

  ventasProductos: any=[];

  ventPro: Venta_producto = {
    id_venta: 0,
    id_producto:0,
    cantidad_de_producto:0,
    
  };

  inv: Inventario={
    id_producto:null,
    cantidad_disp:0,
  }

  cartItems: CartitemModel[]=[];

  total:number=0;

  public payPalConfig ? : IPayPalConfig;
  
  constructor(
              private messageService: MessageService,
              private storageService: StorageService,
              private modalService: NgbModal,
              private spinner: NgxSpinnerService,
              private inventarioService: InventarioService,
              private ventasService: VentasService,
              private ventaProductosService: VentaProductosService
              ) { }

  ngOnInit(): void {
    this.initConfig();
    if(this.storageService.existsCart()){
      this.cartItems=this.storageService.getCart();
    }
    this.getItem();
    
    this.total=this.getTotal();
  }

  private initConfig(): void {
    this.payPalConfig = {
        currency: 'MXN',
        clientId: environment.clientId,
        createOrderOnClient: (data) => < ICreateOrderRequest > {
            intent: 'CAPTURE',
            purchase_units: [{
                amount: {
                    currency_code: 'MXN',
                    value: this.getTotal().toString(),
                    breakdown: {
                        item_total: {
                            currency_code: 'MXN',
                            value: this.getTotal().toString()
                        }
                    }
                },
                items: this.getItemsList()
            }]
        },
        advanced: {
            commit: 'true'
        },
        style: {
            label: 'paypal',
            layout: 'vertical'
        },
        onApprove: (data, actions) => {
            this.spinner.show();
            console.log('onApprove - transaction was approved, but not authorized', data, actions);
            actions.order.get().then( (details: any) => {
                console.log('onApprove - you can get full order details inside onApprove: ', details);
            });

        },
        onClientAuthorization: (data) => {
            console.log('onClientAuthorization - you should probably inform your server about completed transaction at this point', 
            JSON.stringify(data));
            this.vent.cantidad_de_productos=this.getCantidad();
            this.vent.total=this.getTotal();
            this.saveVenta();
            this.deleteProduct();
            this.openModal(
              data.purchase_units[0].items,
              data.purchase_units[0].amount.value
            );
            /*this.saveVentaProductos();*/
            this.spinner.hide();
            this.emptyCart();
            
        },
        onCancel: (data, actions) => {
            console.log('OnCancel', data, actions);
            

        },
        onError: err => {
            console.log('OnError', err);
            
        },
        onClick: (data, actions) => {
            console.log('onClick', data, actions);
        
        },
    };
}

  getItem(): void{
    this.messageService.getMessage().subscribe((product: Products)=> {
        let exists=false;
        this.cartItems.forEach( item => {
          if(item.productId === product.id){
            exists=true;
            item.qty++;
          }
        });
        if(!exists){
      const cartItem = new CartitemModel(product);
        this.cartItems.push(cartItem);
        }
        this.total=this.getTotal();
        this.storageService.setCart(this.cartItems);
      });
    }

    getItemsList(): any[]{
      const items: any[] =[];
      let item={};
      this.cartItems.forEach((it: CartitemModel)=>{
        item={
          name: it.productName,
          quantity: it.qty,
          unit_amount: {value: it.productPrecio, currency_code: 'MXN'}
        };
        items.push(item);
      });
      return items;
    }

    

  getTotal(): number{
    let total=0;
    this.cartItems.forEach( item=>{
      total += item.qty * item.productPrecio!;
      
    });
    return total;
  }

  getCantidad():number{
    let total1=0;
    this.cartItems.forEach(item=>{
      total1= total1 + item.qty;
      console.log(total1);
    });
    return total1;
  }

  emptyCart(): void {
    this.cartItems=[];
    this.total=0;
    this.storageService.clear();
  }

  deleteItem(i:number):void{
    if(this.cartItems[i].qty>1){
      this.cartItems[i].qty--
    }else{
    this.cartItems.splice(i,1);
    }
    this.total=this.getTotal();
    this.storageService.setCart(this.cartItems);
  }

  openModal(items:{}=[],amount:{}=[]): void {
    const modalRef = this.modalService.open(ModalComponent);
    modalRef.componentInstance.items= items;
    modalRef.componentInstance.amount=amount;
  }

  efectivo(){
    this.vent.cantidad_de_productos=this.getCantidad();
    this.vent.total=this.getTotal();
    this.saveVenta();
    this.deleteProduct();
    this.openModal(
      this.getItemsList(),
      this.getTotal().toString()
    );
    this.emptyCart();
  }

  saveVenta(){
    delete this.vent.fecha;
    delete this.vent.id;
    this.ventasService.saveVenta(this.vent).subscribe(
      res => (console.log(res))
    );
    
    
  }

  /*saveVentaProductos(){
    
    this.ventasService.getId().subscribe((res) =>{
      this.ventas=Object.values(res);
      this.ventas2=Object.values(this.ventas[0]);
      console.log(res);
      console.log(this.ventas2[0]);
      this.ventPro.id_venta=this.ventas2[0];
    this.cartItems.forEach((it: CartitemModel)=>{
      this.ventPro.id_producto!=it.productId;
      this.ventPro.cantidad_de_producto=it.qty;
      this.ventaProductosService.saveVentasProductos(this.ventPro).subscribe(
        res => (console.log(res))
      );
    });
    });
      
      
    
  }*/

  deleteProduct() {
    
    this.cartItems.forEach((it: CartitemModel)=>{
      this.inv.id_producto=it.productId;
      this.inv.cantidad_disp=it.qty;
      this.ventasService.updateInventario(this.inv).subscribe(
        (res) => {
          console.log(res);
          
        },
        (err) => console.log(err)
      );
       
      
    });
    
  }

}
