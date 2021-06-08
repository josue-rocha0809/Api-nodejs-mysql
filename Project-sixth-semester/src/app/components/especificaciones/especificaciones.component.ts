import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-especificaciones',
  templateUrl: './especificaciones.component.html',
  styleUrls: ['./especificaciones.component.css'],
})
export class EspecificacionesComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
}
