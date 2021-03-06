import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';
import { Lesson } from '../interface/lesson';
import { ResponseLesson, ResponseLessons } from '../interface/responses';

@Injectable({
  providedIn: 'root'
})
export class LessonsService {

  constructor(private http:HttpClient) { }

  private kardsURL = 'http://localhost:8080/api/';

  getLessonById(lessonId : number): Observable<Lesson> {

    return this.http.get<Lesson>(this.kardsURL + "lecciones/" + lessonId)

  }

  getLessons(): Observable<Lesson[]> {
    return this.http.get<Lesson[]>(this.kardsURL + "lecciones")

  }

}
