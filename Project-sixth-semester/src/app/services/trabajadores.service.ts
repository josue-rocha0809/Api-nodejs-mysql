import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Users } from '../models/users';

@Injectable({
  providedIn: 'root'
})
export class TrabajadoresService {
  API_URI='http://localhost:3000';

  constructor(private http:HttpClient) { }

  getTrabajadores(){
    return this.http.get(`${this.API_URI}/usuario`)
  }

  saveTrabajador(usuario:Users){
    return  this.http.post(`${this.API_URI}/usuario`,usuario);
  }

  deleteTrabajador(id:String){
    return  this.http.delete(`${this.API_URI}/usuario/${id}`);
  }
}
