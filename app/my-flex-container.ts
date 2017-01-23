import { Component } from '@angular/core';
import { Art } from './art';
import {InfoBlock} from './info-block';

const ART: Art[] = [
  { id: 11, name: 'Mr. Nice',likes: 11, views:25 ,dateOfCreation : '11.10.2009',
imagePath: 'http://7oom.ru/wp-content/uploads/foto-priroda-31.jpg',
description: 'dgfsgfsdfsefsefd frges'},

 { id: 11, name: 'Mr. Nice',likes: 11, views:25 ,dateOfCreation : '11.10.2009',
imagePath: 'http://7oom.ru/wp-content/uploads/foto-priroda-32.jpg',
description: 'dgfsgfsdfsefsefd frges'},

{ id: 11, name: 'Mr. Nice',likes: 11, views:25 ,dateOfCreation : '11.10.2009',
imagePath: 'http://7oom.ru/wp-content/uploads/foto-priroda-33.jpg',
description: 'dgfsgfsdfsefsefd frges'},

{ id: 11, name: 'Mr. Nice',likes: 11, views:25 ,dateOfCreation : '11.10.2009',
imagePath: 'http://7oom.ru/wp-content/uploads/foto-priroda-34.jpg',

description: 'dgfsgfsdfsefsefd frges'},

{ id: 11, name: 'Mr. Nice',likes: 11, views:25 ,dateOfCreation : '11.10.2009',
imagePath: 'http://7oom.ru/wp-content/uploads/foto-priroda-35.jpg',
description: 'dgfsgfsdfsefsefd frges'},
];



@Component({

 moduleId: module.id,
  selector: 'my-flex-container',
  templateUrl: './my-flex-container.html',
  styleUrls: ['./my-flex-container.css']
})

export class MyFlexContainer{

arts =ART ;
}