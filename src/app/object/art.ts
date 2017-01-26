import {Tag} from "./tag";
import {User} from "./user";
export class Art {
  id: number;
  name: string
  likes: number;
  views: number;
  dateOfCreation: string;
  imagePath: string;
  description: string;
  tags : Tag[];
  owner : User;

}
