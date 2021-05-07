import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { AdminComponent } from './components/administrador/admin/admin.component';
import { CajeroComponent } from './components/cajero/cajero.component';
import { ProductosComponent } from './components/inventario/productos/productos.component';
import { InfotrabajadoresComponent } from './components/trabajador/infotrabajadores/infotrabajadores.component';
import { ProveedoresComponent } from './components/inventario/proveedores/proveedores.component';
import { MercanciaComponent } from './components/inventario/mercancia/mercancia.component';
import { EditartrabajadorComponent } from './components/trabajador/editartrabajador/editartrabajador.component';
import { ListComponent } from './components/list/list.component';

const routes: Routes = [
  {path: '', redirectTo:'login',pathMatch:'full'},
  {path: 'login', component: LoginComponent },
  {path: 'administrador',component:AdminComponent},
  {path: 'cajero',component:CajeroComponent},
  {path: 'productos', component:ProductosComponent},
  {path: 'proveedores', component:ProveedoresComponent},
  {path: 'mercanciaEntrante', component:MercanciaComponent},
  {path: 'infoTra', component: InfotrabajadoresComponent},
  {path: 'editarTra', component:EditartrabajadorComponent},
  {path: 'inventario', component:ListComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
