import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Route} from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from '@angular/material';
import 'hammerjs';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { KontakComponent } from './kontak/kontak.component';
import { IntroComponent } from './intro/intro.component';
import { ServiceComponent } from './service/service.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NothingComponent } from './nothing/nothing.component';

const routingApp: Route[] = [
  {path: '', component: IntroComponent},
  {path: 'about', component: AboutComponent},
  {path: 'kontak', component: KontakComponent},
  {path: 'service', component: ServiceComponent},
  {path: '**', component: NothingComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    KontakComponent,
    IntroComponent,
    ServiceComponent,
    NavbarComponent,
    NothingComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MaterialModule,
    RouterModule.forRoot(routingApp)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
