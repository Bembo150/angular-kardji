import { Utiliza } from "./utiliza";

export interface Modalidad {
  id : number;
  name : string;
  description : string;
  utilizas : Set<Utiliza>;
}
