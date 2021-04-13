import { Component, OnInit } from '@angular/core';
import { Kard } from '../interface/kard';
import { Lesson } from '../interface/lesson';
import { LessonsService } from '../services/lessons.service';

@Component({
  selector: 'kard-component',
  templateUrl: './kard-component.component.html',
  styleUrls: ['./kard-component.component.css']
})
export class KardComponentComponent implements OnInit {

  constructor(private lessonService: LessonsService) {
  }

  kards: Kard[] = [];
  lesson : Lesson | undefined
  lessonNum = 1;
  index : number = 0;

  ngOnInit() {

    this.lessonService.getLessonById(this.lessonNum).subscribe(
      lesson => this.kards = Array.from(lesson.cartases).sort(((a, b) => a.id - b.id)),
      error => console.log(error),
      () => console.log("Operacion completada con exito.")
    );
  }

  countChange(event : number){
    this.lessonNum = event
    this.ngOnInit()
  }

  nextKard() {
    if(this.index === this.kards.length){
      this.index = 0;
    }else{
      this.index++;
    }
  }

  previousKard() {
    if(this.index === 0){
      this.index = this.kards.length;
    }else{
      this.index--;
    }
  }

  kardIndexPag(kardIndex : number) {
    this.index = kardIndex;

  }
}
