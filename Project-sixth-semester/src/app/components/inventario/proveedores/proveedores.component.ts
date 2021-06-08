import { Component, OnInit } from '@angular/core';
import { Providers } from 'src/app/models/providers';
import { ProveedoresService } from '../../../services/proveedores.service';
@Component({
  selector: 'app-proveedores',
  templateUrl: './proveedores.component.html',
  styleUrls: ['./proveedores.component.css'],
})
export class ProveedoresComponent implements OnInit {
  proveedores: any = [];
  prove: Providers = {
    id:0,
    nombre_prove: '',
    direccion_prove: '',
    cp_prove: 0,
    telefono_prove: 0,
  };

  constructor(private providerService: ProveedoresService) {}

  ngOnInit(): void {
    this.getProvider();
  }

  getProvider() {
    this.providerService.getProviders().subscribe(
      res => (this.proveedores = res));
  }

  saveProvider() {
    delete this.prove.id;
    this.providerService.saveProvider(this.prove).subscribe((res) => {
      console.log(res);
      this.getProvider();
      alert('Proveedor agregado')
    });
  }

  productinfo() {
    this.providerService
      .getProviders()
      .subscribe((res) => (this.proveedores = res));
  }

  deleteProvider(id: string) {
    this.providerService.deleteProvider(id).subscribe(
      (res) => {
        console.log(res);
        this.getProvider();
        alert('Proveedor eliminado')
      },
      (err) => console.log(err)
    );
  }
}
