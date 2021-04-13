import { Kard } from "./kard";
import { Utiliza } from "./utiliza";

export interface Lesson {
  id : number;
  name : String;
  description : String;
  imageUrl : String;
  cartases : Set<Kard>;
  utilizas : Set<Utiliza>;

}
