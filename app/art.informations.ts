import { Component, OnInit } from '@angular/core';
import { Subject }           from 'rxjs/Subject';

import { Coments } from './coments';
import { ComentsService } from './comment.service';

const COMENTS: Coments[] = [
 
  { id: 2, author: 'Andrii',commentMessage:'Hi man. I like your picture. How match this house?',dateOfCreation: '12.06.15' },
{ id: 3, author: 'Andrii',commentMessage:'Hi man. I like your picture. How match this house?',dateOfCreation: '12.06.15' }

];



@Component({
  moduleId: module.id,
  selector: 'art-inf',
  templateUrl: 'art.informations.html',
  styleUrls: [ 'art.informations.css' ]
  
  
})
export class ArtInformations implements OnInit  { 
 
// coments = COMENTS;
coments: Coments[] = [];
 constructor(
    private comentsService: ComentsService) {}

 ngOnInit(): void {
    this.comentsService.get().then(com => this.coments = com);
    
  }

  name = 'Andriy';
  artDescription = '  The Mona Lisa (/ˌmoʊnə ˈliːsə/; Italian: Monna Lisa [ˈmɔnna ˈliːza] or La Gioconda [la dʒoˈkonda], French: La Joconde [la ʒɔkɔ̃d]) is a half-length portrait of Lisa Gherardini by the Italian Renaissance artist Leonardo da Vinci, which has been described as "the best known, the most visited, the most written about, the most sung about, the most parodied work of art in the world".[1]';

 }
