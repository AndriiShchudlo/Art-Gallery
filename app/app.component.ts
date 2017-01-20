import { Component } from '@angular/core';

@Component({
 moduleId: module.id,  
 selector: 'my-app',
  templateUrl: 'app.component.html',
  styleUrls: [ 'app.component.css' ]
})
export class AppComponent  { 
   nameAuctor = 'Erik';
   views =25;
   date='25.11.17';
   like=7; }
