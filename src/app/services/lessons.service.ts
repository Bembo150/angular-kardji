import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { Lesson } from '../interface/lesson';

@Injectable({
  providedIn: 'root'
})
export class LessonsService {

  constructor(private http:HttpClient) { }

  private kardsURL = 'http://localhost:8080/api/';

  getLessonById(lessonId : number): Observable<Lesson> {

    return this.http.get<Lesson>(this.kardsURL + "lecciones/" + lessonId);

  }

}
