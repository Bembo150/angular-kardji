import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../interface/user';
import { UserDTO } from '../interface/user-dto';
import { AuthService } from '../services/auth.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  Usuarios : User[] = [];
  UsuarioEntr : UserDTO = {
    name: '',
    password: ''
  };
  nombreUser !: string;
  contraUser !: string;
  error = false;

  constructor(
    private userService: UserService,
    private authService: AuthService,
    private router: Router) { }


  ngOnInit(): void {
    this.userService.getUsuarios().subscribe(
      users => this.Usuarios = users,
      error => console.log(error),
      () => console.log(this.Usuarios)
    );
  }

  login() {
    this.authService.login(this.UsuarioEntr).subscribe(
      () => this.router.navigate(['/app']),
      error => this.error = true
    );
  }

  //Forma antigua de hacerlo
  logIn() {
      this.ComprobarUsuario()
      this.login();
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
