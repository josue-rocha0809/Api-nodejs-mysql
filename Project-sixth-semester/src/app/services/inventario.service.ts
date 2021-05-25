import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Inventario} from '../models/inventario';
import {Products} from '../models/products';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InventarioService {
  API_URI='http://localhost:3000';

  constructor(private http:HttpClient) { }

  getInventario():Observable<Inventario[]>{
    return  this.http.get<Inventario[]>(`${this.API_URI}/inventario`);
  }

  saveInventario(inventario:Inventario){
    return  this.http.post(`${this.API_URI}/inventario`,inventario);
  }

  updateInventario(updateProduct:Products):Observable<Products>{
    return this.http.put(`${this.API_URI}/inventario`,updateProduct);
  }

  deleteInventario(id:String){
    return  this.http.delete(`${this.API_URI}/inventario/${id}`);
  }
  
  
  
  



}
