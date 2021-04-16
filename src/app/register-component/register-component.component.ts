import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../interface/user';
import { Utiliza } from '../interface/utiliza';
import { AuthService } from '../services/auth.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'register-component',
  templateUrl: './register-component.component.html',
  styleUrls: ['./register-component.component.css']
})
export class RegisterComponentComponent implements OnInit {

  productAdded = false;
  User !: User;
  UserTotales : number = 0;
  imageFile = '';
  today = new Date(Date.now());

  constructor(
    private userService: UserService,
    private authService: AuthService,
    private router: Router) {}

  ngOnInit(): void {
    this.resetForm();
    this.userService.getUsuarios().subscribe(
      users => this.UserTotales = users.length,
      error => console.log(error),
      () => console.log(this.UserTotales)
    );
  }

  loadImage(input: HTMLInputElement): void {
    if (!input.files) { return; }
    const file = input.files[0];
    const reader = new FileReader();

    if (file) { // File has been selected (convert to Base64)
      reader.readAsDataURL(file);
    }

    reader.addEventListener('load', () => { //Converted into Base64 event (async)
      this.User.imageUrl = reader.result as string;
    });
  }

  registrarse() {
    this.authService.register(this.User).subscribe(
      () => this.router.navigate(['/auth','login']),
      error => console.log(error)
    );
  }

  addUser(): void {
    console.log(this.UserTotales + ", array");
    this.User.id = this.UserTotales + 1;
    console.log(this.User.id + ", nuevo");
    this.userService.addUsuario(this.User).subscribe(
      () => {
        this.productAdded = true;
        this.router.navigate(['/app']);
      },
      (error: any) => console.error(error)
    );
  }

  resetForm(): void {
    this.User = {
      id: this.UserTotales,
      type: 'registered',
      registerDate: '',
      lastLogIn: '',
      name: '',
      password: '',
      imageUrl: ''
    };
    this.imageFile = '';
  }

}
