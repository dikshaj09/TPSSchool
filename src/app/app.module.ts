import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule }    from '@angular/http';
import { AppComponent } from './app.component';
import { HomeComponent } from './Home/home.component';
import {AppRoutingModule} from './app.routing' ;
import { AgmCoreModule } from '@agm/core';


import {HomeService} from '../service/home.service';
import { CaraouselComponent } from './Home/caraousel.component';
import { SlideComponent } from './Home/slide.component';
import { ContactUsComponent } from './ContactUs/contactus.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CaraouselComponent,
    SlideComponent,
    ContactUsComponent
  ],
  imports: [
    BrowserModule,HttpModule,AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCMcAwLQL8Rw7rvCdAQyo-0NQbzaSDA7yM'
    })
  ],
  providers: [HomeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
