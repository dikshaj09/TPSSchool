import { Component,OnInit } from '@angular/core';
import { HomeService } from '../service/home.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {
  schoolInfo :any =[];
  // title = 'Times Public School';
   landlineNo  ='02385-253682';
  // mobileNo ='7350303083';
  // emailAddress="@ timespublicschool@gmail.com";
   address ="Near Uday Petrol Pump,Nanded-Bidar Road,Udgir Maharashtra 413517";
  // parentsNotice="Parents are advised to come for monthly Parents meet on 1st Monday of every month.Details will be shared about progress of their child.";
  // admissionDetail="Admission for 1 to 4 will start on";

constructor(private homeservice:HomeService){}

  ngOnInit(){
    this.getSchoolInfo();
  }

  getSchoolInfo(){
    this.homeservice.getSchoolInfo().subscribe(response=>{
      console.log("response",response.data);
      this.schoolInfo = response[0];
      //console.log("schoolInfo",this.schoolInfo.title);
    })
  }
}
