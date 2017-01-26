import {Component, OnInit} from "@angular/core";
import {ArtService} from "../service/art.service";
import {Art} from "../object/art";
import {Observable} from "rxjs";

@Component({
  moduleId: module.id,
  selector: 'art-container',
  templateUrl: 'art-container.component.html',
  styleUrls: ['art-container.component.css']
})

export class ArtContainer implements OnInit  {

  constructor (artService: ArtService){  }

  arts: Observable<Art[]>;

  ngOnInit() {
    this.arts.subscribe(() => this.arts= this.artService.artSubj);
  }
  show(arts:Art[]){
    this.arts = arts;
  }
}
