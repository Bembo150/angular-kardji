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
  index : number = 0;

  ngOnInit() {

    this.lessonService.getLessonById(1).subscribe(
      lesson => this.kards = Array.from(lesson.cartases).sort(),
      error => console.log(error),
      () => console.log("Operacion completada con exito.")
    );
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
