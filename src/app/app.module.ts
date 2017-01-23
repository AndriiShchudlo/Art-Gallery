import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import {SlidePanel} from './s-panel';
import {MyHeader} from './my-header';
import {MyFlexContainer} from './my-flex-container';
import {MyFooter} from './my-footer';
import {InfoBlock} from './info-block';
import {BigImage} from './big-image';
import {ArtInformations} from './art.informations';
import {ArtService} from './art.service'
import { LoginField } from './app.login-field'
 
@NgModule({
  declarations: [
    AppComponent, SlidePanel, MyHeader, MyFooter, MyFlexContainer, InfoBlock, BigImage, ArtInformations, LoginField
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
  ],
  providers: [ArtService],
  bootstrap: [AppComponent, SlidePanel, MyHeader, MyFooter, MyFlexContainer, InfoBlock, BigImage, ArtInformations, LoginField]
})
export class AppModule { }
