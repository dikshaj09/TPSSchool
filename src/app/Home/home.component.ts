import { Component, OnInit } from '@angular/core';
import {SlideComponent} from './slide.component';
import {CaraouselComponent} from './caraousel.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  
})
export class HomeComponent  {
  //The time to show the next photo
    private NextPhotoInterval:number = 5000;
    //Looping or not
    private noLoopSlides:boolean = true;
    //Photos
    private slides:Array<any> = [];

    constructor() {
            this.addNewSlide();
    }

    private addNewSlide() {
         this.slides.push(
            {image:'assets/images/School2.JPG',text:'BMW 1'},
            {image:'assets/images/school.JPG',text:'BMW 2'},
            {image:'assets/images/Principal.JPG',text:'BMW 3'}
        );
    }

    private removeLastSlide() {
        this.slides.pop();
    }
}
