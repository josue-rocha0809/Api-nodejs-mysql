import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { MatFormFieldModule} from '@angular/material/form-field';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { AdminComponent } from './components/administrador/admin/admin.component';
import { CajeroComponent } from './components/cajero/cajero.component';
import { InfotrabajadoresComponent } from './components/trabajador/infotrabajadores/infotrabajadores.component';
import { ProductosComponent } from './components/inventario/productos/productos.component';
import { ProveedoresComponent } from './components/inventario/proveedores/proveedores.component';
import { MercanciaComponent } from './components/inventario/mercancia/mercancia.component';

import { ProductosService } from './services/productos.service';
import {UsuariosService} from './services/usuarios.service'
import { ListComponent } from './components/inventario/list/list.component';
import { ProveedoresService } from './services/proveedores.service';
import { NavComponent } from './nav/nav.component';

import {JwtHelperService, JWT_OPTIONS} from '@auth0/angular-jwt';
import { ProductListComponent } from './components/ventas/product-list/product-list.component';
import { CartComponent } from './components/ventas/cart/cart.component';
import { CartItemComponent } from './components/ventas/cart-item/cart-item.component';
import { ProductItemComponent } from './components/ventas/product-item/product-item.component';
import { VentaComponent } from './components/ventas/venta/venta.component';

import { NgxPayPalModule } from 'ngx-paypal';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ModalComponent } from './components/ventas/modal/modal.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminComponent,
    CajeroComponent,
    ProductosComponent,
    ProveedoresComponent,
    InfotrabajadoresComponent,
    MercanciaComponent,
    ListComponent,
    NavComponent,
    ProductListComponent,
    CartComponent,
    CartItemComponent,
    ProductItemComponent,
    VentaComponent,
    ModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatFormFieldModule,
    HttpClientModule,
    NgxPayPalModule,
    NgbModule,
    NgxSpinnerModule,
    
  ],
  providers: [ProductosService,ProveedoresService,UsuariosService,JwtHelperService,{provide:JWT_OPTIONS,useValue:JWT_OPTIONS}],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
