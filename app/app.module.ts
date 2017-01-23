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
import  {BlockInfor} from './block-infor';


@NgModule({
  imports:      [ BrowserModule, HttpModule, JsonpModule ],
  declarations: [ AppComponent, BlockInfor,ArtInformations, SlidePanel, MyHeader, MyFooter, MyFlexContainer, InfoBlock, BigImage],
  bootstrap:    [ AppComponent, BlockInfor, ArtInformations,SlidePanel, MyHeader, MyFooter, MyFlexContainer, InfoBlock, BigImage ],
  providers:[ ComentsService ]
})

export class AppModule { }
