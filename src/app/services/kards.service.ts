import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { Kard } from '../interface/kard';
import { ResponseKards,ResponseKard } from '../interface/responses';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class KardsService {

  private kardsURL = 'http://localhost:8080/api/';

  constructor(private http:HttpClient) { }

  getKards(): Observable<Kard[]> {
    return this.http.get<Kard[]>(this.kardsURL + "cartas").pipe();
  }

  getKardsByLesson(lessonId : number): Observable<Kard[]> {
    return this.http.get<Kard[]>(this.kardsURL + "cartasByLesson/" + lessonId).pipe();
  }

  insert(Kard: Kard): Observable<Kard> {

    return this.http.post<ResponseKard>(this.kardsURL, Kard).pipe(
      map(resp => resp.kards)
    );

  }
}
