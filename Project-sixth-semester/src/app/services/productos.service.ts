import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Products} from '../models/products';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  API_URI='http://localhost:3000';

  constructor(private http:HttpClient) { }

  getProducts():Observable<Products[]>{
    return  this.http.get<Products[]>(`${this.API_URI}/productos`);
  }
  getProduct(id:String|number){
    return  this.http.get(`${this.API_URI}/productos/${id}`);
  }
  
  deleteProduct(id:String){
    return  this.http.delete(`${this.API_URI}/productos/${id}`);
  }
  saveProduct(product:Products){
    return  this.http.post(`${this.API_URI}/productos`,product);
  }
  updateProduct(id: String|number,updateProduct:Products):Observable<Products>{
    return this.http.put(`${this.API_URI}/productos/${id}`, updateProduct);
  }



}
