import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ResponseUser, ResponseUtiliza } from '../interface/responses';
import { Utiliza } from '../interface/utiliza';
import { UtilizaId } from '../interface/utiliza-id';

@Injectable({
  providedIn: 'root'
})
export class UtilizaService {

  private utilizaURL = 'http://localhost:8080/api/utiliza';

  constructor(private http:HttpClient) { }

  getUtilizaById(utilizaId : UtilizaId) : Observable<Utiliza> {
    return this.http.get<Utiliza>(this.utilizaURL + "/" + utilizaId).pipe(
      map(resp => resp)
    )
  }

  addUtiliza(utiliza : Utiliza): Observable<Utiliza>{
    return this.http.post<Utiliza>(this.utilizaURL, utiliza).pipe(
      map(resp => resp)
    )

  }

}
