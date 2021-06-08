import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Contacto} from '../models/contacto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ContactoService{
  API_URI='http://localhost:3000';

  constructor(private http:HttpClient) { }

  saveSend(contacto:Contacto){
    return  this.http.post(`${this.API_URI}/contacto`,contacto);
  }
}
