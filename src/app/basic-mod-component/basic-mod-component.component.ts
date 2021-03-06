import { DatePipe } from '@angular/common';
import { Component, EventEmitter, ModuleWithComponentFactories, OnInit, Output } from '@angular/core';
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
import * as moment from 'moment';
import { TokenIdInfo } from '../interface/token-id-info';

@Component({
  selector: 'basic-mod-component',
  templateUrl: './basic-mod-component.component.html',
  styleUrls: ['./basic-mod-component.component.css']
})
export class BasicModComponentComponent implements OnInit {
  dateFormat = 'YYYY-MM-DDTHH:mm:ss';
  now = moment(new Date(), this.dateFormat);


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
  public lessonNum = 1;
  public progressBar = 0;
  public errorCount = 0;

  accessTokenObj: string = localStorage.getItem('token')!;
  tokenSplited = this.accessTokenObj.split(".",3)
  tokenInfo : TokenIdInfo = JSON.parse(atob(this.tokenSplited[1]));

  constructor(
    private lessonService: LessonsService,
    private modalidadService: ModalidadService,
    private userService: UserService,
    private utilizaService : UtilizaService,
    private router: Router,
    ) {


      this.modalidadService.getModalidadById(1).subscribe(
        (res) => {this.utiliza.modalidades = res, this.utilizaId.idModalidad = res.id});

      this.userService.getUsuarioById(this.tokenInfo.id).subscribe(
        (user) => {this.utiliza.usuarios = user, this.utilizaId.idUsuario = user.id},
      )
      this.lessonService.getLessonById(this.lessonNum).subscribe(
        lesson => {this.utiliza.lecciones = lesson, this.utilizaId.idLeccion = lesson.id} ,
      );
    }

  ngOnInit(): void {

    if(this.progressBar === 100){
      this.addUtiliza();
    }
    //Cada vez que se ejecuta el init cargamos un array de cartas ordenado aleatoriamente
    this.lessonService.getLessonById(this.lessonNum).subscribe(
      lesson => this.kards = Array.from(lesson.cartases).sort(() => .5 - Math.random()),
      error => console.log(error),
      () => console.log("Operacion lecciones completada con exito.", this.kards)
    );

    this.auxRandomNum = Math.floor(Math.random() * 9) + 1;
  }
  //Comprobamos si la respuesta es correcta, y si lo es a??adimos progreso y volvemos a cargar aleatoriamente otros kanjis de la leccion
  checkAnswer(question : number, answer : number){

    if(this.kards[question] === this.kards[answer]){

      this.progressBar = this.progressBar + 10;
      this.ngOnInit()
    }else {

      this.errorCount = this.errorCount + 1;
    }
  }
  //Una vez compeltamos una secuencia de 10 respuestas correctas enviaremos el objeto utiliza formado a la BBDD
  addUtiliza() : void {

    this.utiliza.id = this.utilizaId
    this.utiliza.fallos = this.errorCount
    this.utilizaId.fecha = this.now.toISOString();

    localStorage.setItem('fallos', this.utiliza.fallos.toString())


    this.utilizaService.addUtiliza(this.utiliza).subscribe(
      () => {
        console.log(this.utiliza)
        this.router.navigate(['/result']);
      },
      (error: any) => console.error(error , this.utiliza)
    )
  }

  countChange(event : number){
    if(this.lessonNum != event){
      this.lessonNum = event
      this.progressBar = 0
      this.errorCount = 0
      //Vuelvo a llamar a este metodo porque al cambiar de lecci??n necesito la nueva lecci??n y su id
      this.lessonService.getLessonById(this.lessonNum).subscribe(
        lesson => {this.utiliza.lecciones = lesson, this.utilizaId.idLeccion = lesson.id} ,
        error => console.log(error),
        () => console.log("Operacion lecciones completada con exito."));
      this.ngOnInit()
    }
  }
}
