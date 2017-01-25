import {Component} from "@angular/core";
import {ActivatedRoute, Params} from "@angular/router";
import {Location} from "@angular/common";

import 'rxjs/add/operator/switchMap';
import {Art} from "../object/art";

@Component({
  moduleId: module.id,
  selector: 'art-detail-component',
  templateUrl: './art-detail.component.html'
})
export class ArtDetailComponent {
  art: Art;

  constructor(private route: ActivatedRoute,
              private location: Location) {
    this.route.params.switchMap((params: Params) => this.art=params['art']);
  }

}


