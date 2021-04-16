import { Token } from '@angular/compiler/src/ml_parser/lexer';
import { Kard } from './kard';
import { Lesson } from './lesson';
import { User } from './user';
import { Utiliza } from './utiliza';

export interface ResponseKards {

  kards : Kard[];

}

export interface ResponseKard {

  kards : Kard;

}

export interface ResponseUsers {

  Users : User[];

}

export interface ResponseUser {

  Users : User;

}

export interface ResponseUtiliza {

  utiliza : Utiliza;

}

export interface ResponseLessons {

  lesson : Lesson[];

}

export interface ResponseLesson {

  lesson : Lesson;

}

export interface ResponseToken {
  accessToken : string;
}
