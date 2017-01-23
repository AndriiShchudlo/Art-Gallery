import { Component, OnInit, trigger, state, style, transition, animate  } from '@angular/core';
import { AppComponent } from './app.component'
import { Service } from './app.service'
import { Art } from './art'
import { MyFlexContainer } from './my-flex-container'

@Component({
   moduleId: module.id,
  selector: 'headbar',
  templateUrl: './app.headbar-component.html',
  styleUrls: ['./app.headbar-component.css'],
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

export class HeadBarComponent implements OnInit {
  constructor (private searchService: Service, apc: MyFlexContainer) {  } 
  btnState:string = 'out';
  searchKeyWord:string = "";
  isLogFieldActive = false;
  arts: Art[] = [];
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
    ngOnInit(){
      this.searchService.get('степан').then(search => this.arts = search);
    }
    btnSearchOnClick(){
      
    }
}