import { Injectable }   from '@angular/core'
import { Http, Response } from '@angular/http'
import { Observable }     from 'rxjs'

import 'rxjs/add/operator/toPromise';
import { Art } from './app.art'
import { HeadBarComponent } from './app.headbar-component'

@Injectable()
export class Service {

constructor(private http: Http) {}

get(request:string): Promise<Art[]> {
   return this.http.get(`http://10.0.2.124:8088/findByOwner?search=`)
              .toPromise()
              .then(response => response.json() as Art[])
   }  
}

