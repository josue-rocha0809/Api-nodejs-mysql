import { Component, OnInit } from '@angular/core';
import { Ventas } from 'src/app/models/ventas';
import { VentasService } from 'src/app/services/ventas.service';

@Component({
  selector: 'app-venta-list',
  templateUrl: './venta-list.component.html',
  styleUrls: ['./venta-list.component.css']
})
export class VentaListComponent implements OnInit {


  ventas: Ventas[] = [];

  constructor(private ventasService: VentasService) { }

  ngOnInit(): void {
    this.getVentas();
  }

  getVentas(){
    this.ventasService.getventas().subscribe((res) =>{
      this.ventas=res;
      console.log(res);
      this.collectionSize=this.ventas.length;
      this.refreshVentas();
    });
  }

  page:number = 1;
  pageSize:number = 4;
  collectionSize:number;
  item: any=[];

  refreshVentas() {
    this.item = this.ventas
      .map((pro, i:number) => ({id: i + 1, ...pro }))
      .slice(
        (this.page - 1) * this.pageSize,
        (this.page - 1) * this.pageSize + this.pageSize
      );
  }

}
