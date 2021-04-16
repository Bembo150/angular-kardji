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

  token !: string;
  mostrarRegistro = true;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.token = localStorage.getItem("token")!;
    this.comprobarToken();
  }

  cerrarSesion() {
    this.mostrarRegistro = true;
    localStorage.removeItem('token');
    this.router.navigate(['/auth', 'login']);
  }

  comprobarToken() {
    if (this.token != null) {
      this.mostrarRegistro = false;
      this.router.navigate(['/app']);
    }
  }

}
