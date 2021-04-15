import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Modalidad } from '../interface/modalidad';

@Injectable({
  providedIn: 'root'
})
export class ModalidadService {

  private kardsURL = 'http://localhost:8080/api/modalidad';

  constructor(private http:HttpClient) { }

  getModalidadById(modalidadId : number): Observable<Modalidad> {

   return this.http.get<Modalidad>(this.kardsURL + "/" + modalidadId).pipe(map(mod => {return mod}));

  }
}
