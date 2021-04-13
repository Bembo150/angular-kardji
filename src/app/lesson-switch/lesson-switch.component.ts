import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { Lesson } from '../interface/lesson';
import { LessonsService } from '../services/lessons.service';

@Component({
  selector: 'lesson-switch',
  templateUrl: './lesson-switch.component.html',
  styleUrls: ['./lesson-switch.component.css'],
})
export class LessonSwitchComponent implements OnInit {

  @Output() emitActiveLesson = new EventEmitter<number>();

  lessons : Lesson[] = [];

  constructor(private lessonService: LessonsService) {}

  ngOnInit(): void {
    this.lessonService.getLessons().subscribe(
      lessons => this.lessons = lessons
    )
  }

  activeLesson(lessonNum : number){
    this.emitActiveLesson.emit(lessonNum + 1)
    console.log(lessonNum)
  }

  genArray(n: number){
    return Array(n);
  }
}
