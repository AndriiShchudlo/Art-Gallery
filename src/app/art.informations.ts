import { Component, OnInit } from '@angular/core';
import { Subject }           from 'rxjs/Subject';

import { Coments } from './coments';
import { ComentsService } from './comment.service';

const COMENTS: Coments[] = [
 
  { id: 2, author: 'Andrii',commentMessage:'Nice.This work I really like. It is made at a high level',dateOfCreation: '12.06.15' },
{ id: 3, author: 'Олег',commentMessage:'Класно виглядає. Мені дуже подобається стиль виконання та підхід до кольорів.',dateOfCreation: '12.06.15' }

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
  artDescription = '  В жодній іншій картині Леонардо глибина та імла атмосфери («сфумато») не передані з такою досконалістю, як у «Мона Лізі». Це повітряна перспектива, ймовірно, найкраща за виконанням."Мона Ліза" отримала всесвітню славу не тільки завдяки якості роботи Леонардо, яка вражає і художніх шанувальників, і професіоналів. Картина вивчалася істориками і копіювалась живописцями, але вона б не довго залишалася відомою лише для знавців мистецтва, якби не її виняткова історія. В 1911 році «Мона Ліза» була викрадена і лише три роки опісля, завдяки випадковим обставинам, повернена музею. Протягом цього часу «Мона Ліза» не сходила з обкладинок газет і журналів всього світу. Тому не дивно, що «Мону Лізу» копіювали частіше за всі інші картини. Картина стала обєктом поклоніння як шедевр світової класики.';

 }
