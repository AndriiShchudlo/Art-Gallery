import {Component, OnInit} from "@angular/core";
import {ArtService} from "../service/art.service";
import {Art} from "../object/art";

@Component({
  moduleId: module.id,
  selector: 'art-container',
  templateUrl: 'art-container.component.html',
  styleUrls: ['art-container.component.css']
})1

export class ArtContainer {
  constructor(private artService: ArtService) {
  }
  arts: Art[] = [];

  ngOnInit() {
    this.artService.get('').then(arts => this.arts = arts);
  }
}
