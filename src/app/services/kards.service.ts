import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { Kard } from '../interface/kard';
import { ResponseKards } from '../interface/responses';
import { ResponseKard } from '../interface/responses';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class KardsService {

  private kardsURL = 'http://localhost:8080/api/cartas';

  constructor(private http:HttpClient) { }

  getKards(): Observable<Kard[]> {

    return this.http.get<ResponseKards>(this.kardsURL).pipe(
      map(response => response.kards),
      catchError((resp: HttpErrorResponse) => throwError(`Error al obtener cartas, codigo: ${resp.status}. Mensaje: ${resp.message}`))
    );

  }

  insert(Kard: Kard): Observable<Kard> {

    return this.http.post<ResponseKard>(this.kardsURL, Kard).pipe(
      map(resp => resp.kard)
    );

  }
}
