import { Component, OnInit } from '@angular/core';
import { VentasService } from 'src/app/services/ventas.service';

@Component({
  selector: 'app-venta-list',
  templateUrl: './venta-list.component.html',
  styleUrls: ['./venta-list.component.css']
})
export class VentaListComponent implements OnInit {


  ventas: any = [];

  constructor(private ventasService: VentasService) { }

  ngOnInit(): void {
    this.getVentas();
  }

  getVentas(){
    this.ventasService.getventas().subscribe((res) =>{
      this.ventas=res;
      console.log(res);
    });
  }

}
