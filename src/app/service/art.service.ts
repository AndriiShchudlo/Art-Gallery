import {Injectable}   from '@angular/core'
import {Http, Response} from '@angular/http'


import 'rxjs/add/operator/toPromise';
import {Art} from "../object/art";
import {Tag} from "../object/tag";

@Injectable()
export class ArtService {
  constructor(private http: Http) {
  }

  get(): Promise<Art[]> {
    return this.http.get(`http://10.0.2.124:8088/`)
      .toPromise()
      .then(response => response.json() as Art[])
  }

  artLike(id: number): Promise<number> {
    return this.http.get(`http://10.0.2.124:8088/artLike?artId=${id}`)
      .toPromise()
      .then(response => response.json() as number)
  }

  findByName(name: string): Promise<Art[]> {
    return this.http.get(`http://10.0.2.124:8088/findByName?artName=${name}`)
      .toPromise().then(response => response.json() as Art[])
  }

  findByTagName(tagName: string): Promise<Art[]> {
    return this.http.get(`http://10.0.2.124:8088/findByTagName?tagName=${tagName}`)
      .toPromise().then(response => response.json() as Art[])
  }

  getAllTags(): Promise<Tag[]> {
    return this.http.get(`http://10.0.2.124:8088/getAllTags`).toPromise().then(response => response.json() as Tag[])

  }

  findArtById(id: number): Promise<Art> {
    return this.http.get(`http://10.0.2.124:8088/findArtById?artId=${id}`)
      .toPromise()
      .then(response => response.json() as Art)
  }

  addView(id: number): Promise<number> {
    return this.http.get(`http://10.0.2.124:8088/art/addView?artId=${id}`)
      .toPromise()
      .then(response => response.json() as number)
  }
}
