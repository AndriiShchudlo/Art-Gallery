import {Component, OnInit, Input} from '@angular/core';
import {Subject}           from 'rxjs/Subject';

import {Coments} from '../object/coments';
import {ComentsService} from '../service/comment.service';

const COMENTS: Coments[] = [

  {
    id: 2,
    author: 'Andrii',
    commentMessage: 'Nice.This work I really like. It is made at a high level',
    dateOfCreation: '12.06.15'
  },
  {
    id: 3,
    author: 'Олег',
    commentMessage: 'Класно виглядає. Мені дуже подобається стиль виконання та підхід до кольорів.',
    dateOfCreation: '12.06.15'
  }

];

@Component({
  moduleId: module.id,
  selector: 'comment-comp',
  templateUrl: 'art.comments.html',
  styleUrls: ['art.comments.css']


})
export class ArtComments implements OnInit {

  @Input()
  artId: number;
// coments = COMENTS;
  coments: Coments[] = [];

  constructor(private comentsService: ComentsService) {
  }

  ngOnInit(): void {
    this.comentsService.get(this.artId).then(com => this.coments = com);
  }

  onSubmit(form: any): void {
    console.log(form);
    this.comentsService.addComment(form);

  }

}
