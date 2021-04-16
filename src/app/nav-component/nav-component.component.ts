import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../interface/user';

@Component({
  selector: 'nav-component',
  templateUrl: './nav-component.component.html',
  styleUrls: ['./nav-component.component.css']
})
export class NavComponentComponent implements OnInit {

  token = "";
  mostrarRegistro = true;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.token = JSON.parse(localStorage.getItem("token") || '{}');
    this.comprobarUser();
  }

  cerrarSesion() {
    this.mostrarRegistro = true;
    localStorage.removeItem('token');
    this.router.navigate(['auth', 'login']);
  }

  comprobarUser() {
    console.log("Entra");
    if (this.token == "") {
      this.mostrarRegistro = false;
    }
  }

}
