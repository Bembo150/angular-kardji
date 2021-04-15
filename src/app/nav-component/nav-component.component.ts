import { Component, OnInit } from '@angular/core';
import { User } from '../interface/user';

@Component({
  selector: 'nav-component',
  templateUrl: './nav-component.component.html',
  styleUrls: ['./nav-component.component.css']
})
export class NavComponentComponent implements OnInit {

  usuario !: User;
  mostrarRegistro !: boolean;

  constructor() {}

  ngOnInit(): void {
    this.usuario = JSON.parse(localStorage.getItem("Usuario") || '{}');
    this.comprobarUser();
  }

  cerrarSesion() {
    this.mostrarRegistro = true;
    localStorage.clear();
  }

  comprobarUser() {
    console.log("Entra");
    if (this.usuario != null) {
      this.mostrarRegistro = false;
    }
  }

}
