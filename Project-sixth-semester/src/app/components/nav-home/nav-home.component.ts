import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-home',
  templateUrl: './nav-home.component.html',
  styleUrls: ['./nav-home.component.css']
})
export class NavHomeComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit(): void {
  }
 tologin(){
   this.route.navigate(['login']);
 }
 toContact(){
  this.route.navigate(['contacto']);
 }
}
