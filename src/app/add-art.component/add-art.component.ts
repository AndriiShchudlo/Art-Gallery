import { Component, OnInit } from '@angular/core';
import {ArtService} from "../service/art.service";
import {Art} from "../object/art";


@Component({
  moduleId: module.id,
  selector: 'add-art',
  templateUrl: 'add-art.component.html',
  styleUrls: ['add-art.component.css']
})


export class AddArtComponent {
art: Art;

  constructor(private artService: ArtService) {
  }

  onSubmit(form: any): void {
    this.artService.addArt(form);
  }

}




