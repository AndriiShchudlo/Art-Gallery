import {Component, OnInit, trigger, state, style, transition, animate} from '@angular/core';
import {Art} from "../object/art";
import {ArtService} from "../service/art.service";
import {LoginField} from "../login-field.component/login-field.component"
import {ArtContainer} from "../art-container.component/art-container.component";

@Component({
  selector: 'headbar',
  templateUrl: './headbar.component.html',
  styleUrls: ['./headbar.component.css'],
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
  constructor(private searchService: ArtService,
  private artContainer :ArtContainer) {
  }

  btnState: string = 'out';
  searchKeyWord: string = "";
  //apc.changeArts("")
  arts: Art[] = [];

  toggleLoginField(): void {
    if (this.btnState === 'out') {
      this.btnState = 'in';
    }
    else {
      this.btnState = "out";
    }
  }

  ngOnInit() {
    this.searchService.get().then(search => this.arts = search);
    //this.searchService.get().then(search => console.log(search));
  }

  btnSearchOnClick() {
    this.searchService.findArtByName(this.searchKeyWord).then(search => this.arts = search);
  }

}
