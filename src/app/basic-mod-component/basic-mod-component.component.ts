import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Kard } from '../interface/kard';
import { Lesson } from '../interface/lesson';
import { Modalidad } from '../interface/modalidad';
import { User } from '../interface/user';
import { Utiliza } from '../interface/utiliza';
import { UtilizaId } from '../interface/utiliza-id';
import { LessonSwitchComponent } from '../lesson-switch/lesson-switch.component';
import { LessonsService } from '../services/lessons.service';
import { ModalidadService } from '../services/modalidad.service';
import { UserService } from '../services/user.service';
import { UtilizaService } from '../services/utiliza.service';

@Component({
  selector: 'basic-mod-component',
  templateUrl: './basic-mod-component.component.html',
  styleUrls: ['./basic-mod-component.component.css']
})
export class BasicModComponentComponent implements OnInit {

  public kards : Kard[] = []
  public modalidad : Modalidad = {} as Modalidad;
  public utiliza : Utiliza = {} as Utiliza;
  public lesson : Lesson = {} as Lesson ;
  public usuario : User = {} as User;
  public utilizaId : UtilizaId = {} as UtilizaId;

  aux1 : number[] = [1,2,3]
  aux2 : number[] = [4,5,6]
  aux3 : number[] = [7,8,9]

  public auxRandomNum !: number;
  public progressBar = 0;
  public errorCount = 0;

  constructor(
    private lessonService: LessonsService,
    private modalidadService: ModalidadService,
    private userService: UserService,
    private utilizaService : UtilizaService,
    private router: Router,
    ) {

      this.modalidadService.getModalidadById(1).subscribe(
        (res) => {this.utiliza.modalidades = res, this.utilizaId.idModalidad = res.id});

      this.userService.getUsuarioById(3).subscribe(
        (user) => {this.utiliza.usuarios = user, this.utilizaId.idUsuario = user.id, this.utilizaId.fecha = user.lastLogIn},
        (error) => console.log(error),
        () => console.log("Operacion usuarios completada con exito.")
      )
      this.lessonService.getLessonById(1).subscribe(
        lesson => {this.utiliza.lecciones = lesson, this.utilizaId.idLeccion = lesson.id} ,
        error => console.log(error),
        () => console.log("Operacion lecciones completada con exito.")
      );
    }

  ngOnInit(): void {

    if(this.progressBar === 100){
      this.addUtiliza();
    }

    this.lessonService.getLessonById(1).subscribe(
      lesson => this.kards = Array.from(lesson.cartases).sort(() => .5 - Math.random()),
      error => console.log(error),
      () => console.log("Operacion lecciones completada con exito.", this.kards)
    );

    this.auxRandomNum = Math.floor(Math.random() * 9) + 1;
  }

  checkAnswer(question : number, answer : number){

    if(this.kards[question] === this.kards[answer]){
      console.log("has ganao")
      this.progressBar = this.progressBar + 10;
      this.ngOnInit()
    }else {
      console.log("has perdio")
      this.errorCount = this.errorCount + 1;
    }
  }

  addUtiliza() : void {

    this.utiliza.id = this.utilizaId
    this.utiliza.fallos = this.errorCount

    this.utilizaService.addUtiliza(this.utiliza).subscribe(
      () => {
        console.log(this.utiliza)
        this.router.navigate(['/app']);
      },
      (error: any) => console.error(error , this.utiliza)
    )
  }
}
