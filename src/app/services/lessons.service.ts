import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { Lesson } from '../interface/lesson';

@Injectable({
  providedIn: 'root'
})
export class LessonsService {

  constructor(private http:HttpClient) { }


  getLessonById(lessonId : number): Observable<Lesson> {

  }

  getKardsByLesson(lessonId : number): Observable<Kard[]> {
    return this.http.get<Kard[]>(this.kardsURL + "cartasByLesson/" + lessonId).pipe();
  }

}
