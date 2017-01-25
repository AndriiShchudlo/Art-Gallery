import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component/app.component';
import {ArtContainer} from './my.flex.container/art-container.component';
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
    AppComponent, ArtComponent, ArtContainer, HeadBarComponent, LoginField
  ],
  providers: [ArtService, ArtContainer],
  bootstrap: [AppComponent]
})
export class AppModule {
}
