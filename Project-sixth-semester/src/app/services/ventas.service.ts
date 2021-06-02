import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Ventas} from '../models/ventas';
import { Inventario} from '../models/inventario';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VentasService {
  API_URI='http://localhost:3000';

  constructor(private http:HttpClient) { }

  saveVenta(ventas:Ventas){
    return  this.http.post(`${this.API_URI}/venta`,ventas);
  }
  
  getId(){
    return  this.http.get(`${this.API_URI}/venta`);
  }

  updateInventario(updateInventario:Inventario):Observable<Inventario>{
    return this.http.put(`${this.API_URI}/venta`, updateInventario);
  }

  getventas():Observable<Ventas[]>{
    return  this.http.get<Ventas[]>(`${this.API_URI}/venta`);
  }
  
  



}
