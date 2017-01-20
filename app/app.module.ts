import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, JsonpModule }    from '@angular/http';

import { AppComponent }  from './app.component';
import {ArtInformations} from './art.informations';
import { ComentsService } from './comment.service';

@NgModule({
  imports:      [ BrowserModule, HttpModule, JsonpModule ],
  declarations: [ AppComponent, ArtInformations ],
  bootstrap:    [ AppComponent, ArtInformations ],
  providers:[ComentsService]
})

export class AppModule { }
