import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { ProductosComponent } from './components/inventario/productos/productos.component';
import { InfotrabajadoresComponent } from './components/trabajador/infotrabajadores/infotrabajadores.component';
import { ProveedoresComponent } from './components/inventario/proveedores/proveedores.component';
import { MercanciaComponent } from './components/inventario/mercancia/mercancia.component';
import { ListComponent } from './components/inventario/list/list.component';
import { AuthGuard } from './guards/auth.guard';
import { RoleGuard } from './guards/role.guard';
import { VentaComponent } from './components/ventas/venta/venta.component';
import { HomeComponent } from './components/home/home.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { EspecificacionesComponent } from './components/especificaciones/especificaciones.component';

const routes: Routes = [
  {path: '', redirectTo:'home',pathMatch:'full'},
  {path: 'home', component: HomeComponent},
  {path: 'especificaciones', component: EspecificacionesComponent},
  {path: 'contacto', component: ContactoComponent},
  {path: 'login', component: LoginComponent},
  {path: 'productos', component:ProductosComponent,canActivate:[RoleGuard,AuthGuard],data:{expectedRole:'admin'}} ,
  {path: 'proveedores', component:ProveedoresComponent,canActivate:[RoleGuard,AuthGuard],data:{expectedRole:'admin'} },
  {path: 'entradas', component:MercanciaComponent,canActivate:[RoleGuard,AuthGuard],data:{expectedRole:'admin'} },
  {path: 'inventario', component:ListComponent,canActivate:[RoleGuard,AuthGuard],data:{expectedRole:'admin'}},
  {path: 'productos/editar/:id',component:ProductosComponent,canActivate:[RoleGuard,AuthGuard],data:{expectedRole:'admin'}},
  {path: 'trabajadores', component:InfotrabajadoresComponent,canActivate:[RoleGuard,AuthGuard],data:{expectedRole:'admin'}},
  {path: 'venta', component:VentaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
