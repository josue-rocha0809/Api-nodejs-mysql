import { Component, Input, OnInit } from '@angular/core';
import { CartitemModel } from 'src/app/models/cart-item-model';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {

  @Input() cartItem: CartitemModel;

  constructor() { }

  ngOnInit(): void {
  }

}
