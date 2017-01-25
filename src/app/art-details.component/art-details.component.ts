import {Component,OnInit, Input} from "@angular/core";
import {ActivatedRoute, Params,Router} from "@angular/router";
import {Location} from "@angular/common";
import {ArtService} from "../service/art.service";

import 'rxjs/add/operator/switchMap';
import {Art} from "../object/art";

@Component({
  moduleId: module.id,
  selector: 'art-detail-component',
  templateUrl: './art-detail.component.html',
  styleUrls: ['art-detail.component.css']
})
export class ArtDetailComponent implements OnInit {
  
  art: Art;

  id : number;

  constructor(private route: ActivatedRoute,
              private location: Location,
              private router: Router,private artService : ArtService) {
  }
  ngOnInit():void{

this.route.params
    .switchMap((params: Params) => this.artService.findArtById(+params['artId']))
    .subscribe(art => this.art = art);

}
   

}


