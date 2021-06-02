import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Resupplys } from '../models/resupplys';

@Injectable({
  providedIn: 'root'
})
export class EntradasService {
  API_URI='http://localhost:3000';

  constructor(private http:HttpClient) { }

  getResupplys():Observable<Resupplys[]>{
    return  this.http.get<Resupplys[]>(`${this.API_URI}/entradas`);
  }
  getResupply(id:String){
    return  this.http.get(`${this.API_URI}/entradas/${id}`);
  }
  deleteResupply(id:String){
    return  this.http.delete(`${this.API_URI}/entradas/${id}`);
  }
  saveResupply(resupply:Resupplys){
    return  this.http.post(`${this.API_URI}/entradas`,resupply);
  }
  updateResupply(id: String|number,updateResupply:Resupplys):Observable<Resupplys>{
    return this.http.put(`${this.API_URI}/entradas/${id}`, updateResupply);
  }

  deletePro(id:String){
    return  this.http.delete(`${this.API_URI}/entradas/pro/${id}`);
  }



}
