import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AutenticacionService } from '../services/autenticacion.service';

@Injectable({
  providedIn: 'root'
})


export class AuthGuard implements CanActivate {

constructor(private authService:AutenticacionService,private router:Router){

}
  canActivate():boolean{
    if(!this.authService.isAuth()){
      console.log('Token no es valido o ya expiro');
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }

}
