import { Component, OnInit } from '@angular/core';
import { HomeService } from '../../service/home.service'

@Component({
    selector: 'app-contactus',
    templateUrl: './contactus.component.html'     
  })

  export class ContactUsComponent{
    schoolInfo :any =[];
    lat: number = 18.4017;
    lng: number = 77.099047;
    zoom:number = 16;
    
  constructor(private homeservice:HomeService){}
  
    ngOnInit(){
      this.getSchoolInfo();
    }
  
    getSchoolInfo(){
      this.schoolInfo=this.homeservice.getSchoolInfo();
      console.log("schoolInfo",this.schoolInfo);
    
    }
  }