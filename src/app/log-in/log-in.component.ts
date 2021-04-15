import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../interface/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  Usuarios : User[] = [];
  UsuarioEntr !: User;
  nombreUser !: string;
  contraUser !: string;

  constructor(private userService: UserService,
    private router: Router) { }


  ngOnInit(): void {
    this.userService.getUsuarios().subscribe(
      users => this.Usuarios = users,
      error => console.log(error),
      () => console.log(this.Usuarios)
    );
  }

  logIn() {
      this.ComprobarUsuario()
      this.router.navigate(['/app']);
  }

  ComprobarUsuario() {
    for (let user of this.Usuarios) {
      console.log("Bucle");
      if (user.name == this.nombreUser) {
        console.log("Entra, usuario correcto");
        this.UsuarioEntr = user;
        this.ComprobarContraseña();
      }
    }
  }

  ComprobarContraseña() {
    if (this.UsuarioEntr.password == this.contraUser) {
      console.log("Entra, contraseña correcta");
      localStorage.setItem("Usuario",JSON.stringify(this.UsuarioEntr));
    }
  }
}
