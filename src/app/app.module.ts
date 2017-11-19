import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule }    from '@angular/http';
import { AppComponent } from './app.component';
import { HomeComponent } from './Home/home.component';
import {AppRoutingModule} from './app.routing' 

import {HomeService} from '../service/home.service';
import { CaraouselComponent } from './Home/caraousel.component';
import { SlideComponent } from './Home/slide.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CaraouselComponent,
    SlideComponent
  ],
  imports: [
    BrowserModule,HttpModule,AppRoutingModule
  ],
  providers: [HomeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
