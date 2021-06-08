import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { AutenticacionService } from '../services/autenticacion.service';
import { Observable } from 'rxjs';

import decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {

constructor(
  private authService:AutenticacionService,
  public router:Router){}

  canActivate(route:ActivatedRouteSnapshot):boolean{
    const expectedRole = route.data.expectedRole;
    const token = localStorage.getItem('token');

    var abc={username:String,role:String};
    abc=decode(token!);

  console.log(abc.role);

  if( abc.role !== expectedRole){
    console.log('usuario no autorizado');
    alert("usuario no autorizado");
    this.router.navigate(['venta'])
    return false;
  }

    return true;
  }

}
