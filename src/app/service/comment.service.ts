import {Injectable}     from '@angular/core';
import {Http, Response} from '@angular/http';

import 'rxjs/add/operator/toPromise';
import {Coments} from "../object/coments";

@Injectable()
export class ComentsService {

  constructor(private http: Http) {
  }

  get(art_id:number): Promise<Coments[]> {
    return this.http.get(`http://localhost:8088/art/${art_id}/comments`)
      .toPromise()
      .then(response => response.json() as Coments[]);
  }
  addComment(Coments:any){
  this.http.post(`http://10.0.2.124:8088`,Comment).subscribe();
}

}
