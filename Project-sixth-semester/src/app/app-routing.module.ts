import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { AdminComponent } from './components/administrador/admin/admin.component';
import { CajeroComponent } from './components/cajero/cajero.component';
import { ProductosComponent } from './components/inventario/productos/productos.component';
import { InfotrabajadoresComponent } from './components/trabajador/infotrabajadores/infotrabajadores.component';
import { ProveedoresComponent } from './components/inventario/proveedores/proveedores.component';
import { MercanciaComponent } from './components/inventario/mercancia/mercancia.component';
import { ListComponent } from './components/inventario/list/list.component';
import { AuthGuard } from './guards/auth.guard';
import { RoleGuard } from './guards/role.guard';

const routes: Routes = [
  {path: '', redirectTo:'login',pathMatch:'full'},
  {path: 'login', component: LoginComponent},
  {path: 'administrador',component:AdminComponent,canActivate:[RoleGuard,AuthGuard],data:{expectedRole:'admin'}},
  {path: 'cajero',component:CajeroComponent,canActivate:[AuthGuard] },
  {path: 'productos', component:ProductosComponent,canActivate:[RoleGuard,AuthGuard],data:{expectedRole:'admin'}} ,
  {path: 'proveedores', component:ProveedoresComponent,canActivate:[RoleGuard,AuthGuard],data:{expectedRole:'admin'} },
  {path: 'mercanciaEntrante', component:MercanciaComponent,canActivate:[RoleGuard,AuthGuard],data:{expectedRole:'admin'} },
  {path: 'signup', component: InfotrabajadoresComponent},
  {path: 'inventario', component:ListComponent,canActivate:[RoleGuard,AuthGuard],data:{expectedRole:'admin'}},
  {path: 'productos/editar/:id',component:ProductosComponent,canActivate:[RoleGuard,AuthGuard],data:{expectedRole:'admin'}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
