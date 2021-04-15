import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ResponseUser } from '../interface/responses';
import { User } from '../interface/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private usersURL = 'http://localhost:8080/api/users';

  constructor(private http:HttpClient) { }

  addUsuario(User : User): Observable<User> {

    return this.http.post<ResponseUser>(this.usersURL, User).pipe(
      map(resp => resp.Users)
    );

  }

  getUsuarios(): Observable<User[]> {

    return this.http.get<User[]>(this.usersURL).pipe(
    );
  }

  getUsuarioById(userId : number) : Observable<User> {
    return this.http.get<User>(this.usersURL + "/" + userId).pipe(
      map(resp => resp)
    )
  }

}
