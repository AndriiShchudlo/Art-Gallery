import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component/app.component';
import {ArtService} from './service/art.service'
import {ArtComponent} from "./art.component/art.component";
import {ArtDetailComponent} from "./art-details/art-details.component";
import {RouterModule} from "@angular/router";
import {ArtContainer} from "./art.container/art-container.component";
import {HeadBarComponent} from './headbar.component/headbar.component'
import {LoginField} from "./headbar.component/login-field.component";
import {HomeComponent} from "./home/home.component";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path: 'detail',
        component: ArtDetailComponent
      },
      {
        path: '',
        component: HomeComponent
      }
    ])
  ],
  declarations: [
    AppComponent, ArtComponent, ArtContainer,ArtDetailComponent, HeadBarComponent, LoginField
  ],
  providers: [ArtService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
