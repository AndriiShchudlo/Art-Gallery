import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component/app.component';
import {MyFlexContainer} from './my.flex.container/art-container.component';
import {ArtService} from './service/art.service'
import {ArtComponent} from "./art.component/art.component";
import {HeadBarComponent} from './headbar.component/headbar.component'
import {LoginField} from "./headbar.component/login-field.component";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  declarations: [
    AppComponent, ArtComponent, MyFlexContainer, HeadBarComponent, LoginField
  ],
  providers: [ArtService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
