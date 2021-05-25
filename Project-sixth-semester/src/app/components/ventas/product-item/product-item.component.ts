import { Component, Input, OnInit } from '@angular/core';
import { Products } from 'src/app/models/products';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  @Input() products: Products;
  constructor(
              private messageService: MessageService
  ) { }

  ngOnInit(): void {
  }

  addToCart(): void{
    this.messageService.sendMessage(this.products);
  }

}
