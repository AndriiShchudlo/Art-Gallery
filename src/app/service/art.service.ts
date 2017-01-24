import {Injectable}   from '@angular/core'
import {Http, Response} from '@angular/http'

import 'rxjs/add/operator/toPromise';
import {Art} from "../object/art";

@Injectable()
export class ArtService {
  constructor(private http: Http) {
  }

  get(request:string): Promise<Art[]> {
    return this.http.get(`http://10.0.2.124:8088/${request}`)
      .toPromise()
      .then(response => response.json() as Art[])
  }

  artLike(id: number): Promise<number> {
    return this.http.get(`http://10.0.2.124:8088/artLike?artId=${id}`)
      .toPromise()
      .then(response => response.json() as number)
  }
}
