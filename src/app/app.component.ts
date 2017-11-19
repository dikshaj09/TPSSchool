import { Component,OnInit } from '@angular/core';
import { HomeService } from '../service/home.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {
  schoolInfo :any =[];
  
constructor(private homeservice:HomeService){}

  ngOnInit(){
    this.getSchoolInfo();
  }

  getSchoolInfo(){
    this.schoolInfo=this.homeservice.getSchoolInfo();
    console.log("schoolInfo",this.schoolInfo);
  
  }
}
