import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Contacto } from 'src/app/models/contacto';
import { ContactoService } from 'src/app/services/contacto.service';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  contacto: Contacto = {
    id: null,
    email: '',
    nombre: '',
    direccion:'',
    pais: '',
    estado: '',
    ciudad: '',
  };

  constructor(private contactoService:ContactoService,private router: Router) { }

  ngOnInit(): void {
  }

  sendMessage() {

    delete this.contacto.id;
    this.contactoService.saveSend(this.contacto).subscribe((res) => {
      console.log(res);
      alert('Mensaje enviado');
      this.router.navigate(['contacto']);
    });
  }

}
