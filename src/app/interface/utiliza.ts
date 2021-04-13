import { Lesson } from "./lesson";
import { Modalidad } from "./modalidad";
import { User } from "./user";
import { UtilizaId } from "./utiliza-id";

export interface Utiliza {
  id : UtilizaId;
  lecciones : Lesson;
  modalidades : Modalidad;
  usuarios : User;
  fallos : number;
}
