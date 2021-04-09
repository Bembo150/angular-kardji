import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Kard } from '../interface/kard';
import { ResponseKards } from '../interface/responses';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class KardsService {

  constructor(private http:HttpClient) { }

  getKards(): Observable<Kard[]> {

    return this.http.get<ResponseKards>('http://localhost:5432/api/cartas').pipe(
      map(resp => resp.kards)
    )
  }
}
