import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, JsonpModule }    from '@angular/http';

import { AppComponent }  from './app.component';
import {ArtInformations} from './art.informations';
import { ComentsService } from './comment.service';


import {SlidePanel} from './s-panel';

import {MyHeader} from './my-header';
import {MyFlexContainer} from './my-flex-container';
import {MyFooter} from './my-footer';
import {InfoBlock} from './info-block';
import {BigImage} from './big-image';


@NgModule({
  imports:      [ BrowserModule, HttpModule, JsonpModule ],
  declarations: [ AppComponent, ArtInformations, SlidePanel, MyHeader, MyFooter, MyFlexContainer, InfoBlock, BigImage ],
  bootstrap:    [ AppComponent, ArtInformations, SlidePanel, MyHeader, MyFooter, MyFlexContainer, InfoBlock, BigImage ],
  providers:[ComentsService]
})

export class AppModule { }
