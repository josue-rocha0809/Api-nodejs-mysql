import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import { Observable } from 'rxjs';
import { Providers } from '../models/providers';

@Injectable({
  providedIn: 'root'
})

export class ProveedoresService {
  API_URI='http://localhost:3000';

  constructor(private http:HttpClient) { }

  getProviders():Observable<Providers[]>{
    return  this.http.get<Providers[]>(`${this.API_URI}/proveedores`);
  }
  getProvider(id:String){
    return  this.http.get(`${this.API_URI}/proveedores/${id}`);
  }
  deleteProvider(id:String){
    return  this.http.delete(`${this.API_URI}/proveedores/${id}`);
  }
  saveProvider(provider:Providers){
    return  this.http.post(`${this.API_URI}/proveedores`,provider);
  }
  updateProvider(id: String,updateProvider:Providers):Observable<Providers>{
    return this.http.put(`${this.API_URI}/proveedores/${id}`, updateProvider);
  }



}
