import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ResponseToken } from '../interface/responses';
import { User } from '../interface/user';
import { UserDTO } from '../interface/user-dto';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private usersURL = 'http://localhost:8080/api/';

  constructor(private http:HttpClient) { }

  login(usuario:UserDTO): Observable<void> {
    return this.http.post<ResponseToken>(this.usersURL+'auth/login',usuario).pipe(
      map(resp => {
        localStorage.setItem('token', resp.accessToken)
      })
    );
  }

  register(usuario:UserDTO): Observable<void> {
    return this.http.post<void>(this.usersURL+'auth/register',usuario);
  }
}
