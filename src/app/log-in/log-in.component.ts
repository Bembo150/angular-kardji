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

  UsuarioEntr : UserDTO = {
    name: '',
    password: ''
  };
  nombreUser !: string;
  contraUser !: string;
  error = false;

  constructor(
    private authService: AuthService,
    private router: Router) { }


  ngOnInit(): void {
  }

  login() {
    this.authService.login(this.UsuarioEntr).subscribe(
      () => this.router.navigate(['/app']),
      error => this.error = true
    );
  }
}
