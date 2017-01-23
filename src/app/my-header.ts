import { Component, OnInit, trigger, state, style, transition, animate  } from '@angular/core';

@Component({
  selector: 'my-header',
  templateUrl: 'my-header.html',
  styleUrls: ['my-header.css'],
  animations: [
    trigger('slideInOut', [
      state('in', style({
        transform: 'translateY(25px)',
        opacity: 1
      })),
      state('out', style({
        transform: 'translateY(-25px)',
        opacity: 0
      })),
      transition('in => out', animate('250ms ease-in-out')),
      transition('out => in', animate('250ms ease-in-out'))
    ])]
})


export class MyHeader {
  btnState:string = 'out';
  searchKeyWord:string = "";
  isLogFieldActive = false;
  //arts: Art[] = [];
  //constructor (private searchService: Service) {  } 
  toggleLoginField():void{
        if(this.btnState === 'out') {
          this.btnState = 'in';
          this.isLogFieldActive = true;
        }
        else {
          this.btnState = "out";
          this.isLogFieldActive = false;
        }
    }
    btnSearchOnClick(){
     //this.searchService.get('степан').then(search => this.arts = search);
    }
}

