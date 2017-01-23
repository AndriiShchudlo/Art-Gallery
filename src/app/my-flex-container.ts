


import { Component, OnInit} from '@angular/core';
import { Art } from './art';
import {InfoBlock} from './info-block';
import {ArtService} from './art.service'

@Component({

 moduleId: module.id,
  selector: 'my-flex-container',
  templateUrl: './my-flex-container.html',
  styleUrls: ['./my-flex-container.css']
})

export class MyFlexContainer implements OnInit{

constructor(private artService: ArtService){}

arts: Art[] = [];
tr:number;
ngOnInit(){
  this.artService.get().then(search => this.arts = search);;
}
isLiked = false;
likeClick(id: number ){
    //if (this.isLiked==true) return;
    //this.isLiked = true;  Avoiding multiple like clicks in single session
    this.artService.artLike(id).then(s => this.tr=s);
  }
}