import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Venta_producto} from '../models/ventaProductos';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VentaProductosService {
  API_URI='http://localhost:3000';

  constructor(private http:HttpClient) { }

  saveVentasProductos(venta_producto:Venta_producto){
    return  this.http.patch(`${this.API_URI}/venta`,venta_producto);
  }
  



}
