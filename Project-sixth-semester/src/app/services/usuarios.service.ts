import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Users } from '../models/users';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  API_URI='http://localhost:3000';

  constructor(private http:HttpClient) { }

  

  getOneUser(id:String){
  return this.http.get(`${this.API_URI}/usuario/${id}`)
  }
}
