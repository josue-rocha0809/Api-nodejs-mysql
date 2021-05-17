import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Authentication} from '../models/authentication';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {
  API_URI='http://localhost:3000';

  constructor(private http:HttpClient) { }

  
  saveAut(aut:Authentication){
    return  this.http.post(`${this.API_URI}/signup`,aut);
  }
  



}
