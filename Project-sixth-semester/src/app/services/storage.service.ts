import { Injectable } from '@angular/core';
import { CartItemComponent } from '../components/ventas/cart-item/cart-item.component';
import { CartitemModel } from '../models/cart-item-model';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  existsCart(): boolean{
    return localStorage.getItem('cart') != null;
  }

  setCart( cart: CartitemModel[]): void{
    localStorage.setItem('cart',JSON.stringify(cart));
  }

  getCart(): CartitemModel[]{
    return JSON.parse(localStorage.getItem('cart')!);
  }

  clear(): void{
    localStorage.removeItem('cart');
  }
}
