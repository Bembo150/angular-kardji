import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ResponseUser, ResponseUtiliza } from '../interface/responses';
import { Utiliza } from '../interface/utiliza';

@Injectable({
  providedIn: 'root'
})
export class UtilizaService {

  private utilizaURL = 'http://localhost:8080/api/utiliza';

  constructor(private http:HttpClient) { }

  addUtiliza(utiliza : Utiliza): Observable<Utiliza>{
    return this.http.post<Utiliza>(this.utilizaURL, utiliza).pipe(
      map(resp => resp)
    )

  }

}
