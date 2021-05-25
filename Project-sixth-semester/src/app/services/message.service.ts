import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Products } from '../models/products';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  message = new Subject();

  constructor() { }

  sendMessage(product:Products): void{
    this.message.next(product);
  }

  getMessage(): Observable<any> {
    return this.message.asObservable();
  }
}
