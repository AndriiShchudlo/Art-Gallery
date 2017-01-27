import { Component, OnInit } from '@angular/core';
import {ArtService} from "../service/art.service";
import {Tag} from "../object/tag";

@Component({
  moduleId: module.id,
  selector: 'right-slide',
  templateUrl: 'right-slide.component.html',
  styleUrls: ['right-slide.component.css']
})


export class RightSlide implements OnInit{

  constructor(private artService: ArtService) {
  }

  tags: Tag[] = [];

  ngOnInit() {
    this.artService.getAllTags().then(tags => this.tags = tags);
  }


}



