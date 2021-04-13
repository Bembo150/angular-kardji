import { Kard } from './kard';
import { User } from './user';

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
