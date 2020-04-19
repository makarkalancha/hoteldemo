/*
 Reactive form. In angular js 2 you have an option to use a template driven form or reactive forms.
 Template driven forms are generally simpler and requires less Javascriopt.
 Reactive forms are much easier to unit test because they are model driven.
 You could test a reactive form using a unit testing framework such as Karma.
 Testin a template driven form would require a end-to-end testing framwork such as Selenium.
*/
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  public submitted  : boolean;
  
  roomsearch : FormGroup;
  rooms : Room[];  

  ngOnInit(){
    this.roomsearch = new FormGroup({
      checkin: new FormControl(''),
      checkout: new FormControl('')
    })

    this.rooms = ROOMS;
  }

  onSubmit({value, valid}: {value: Roomsearch, valid:boolean}){
    console.log(value);
  }

  reserveRoom(value: string){
    console.log("Room id for reservation: "+value);
  }
}

export interface Roomsearch{
  checkin:string;
  checkout:string;
}

export interface Room{
  id:string;
  roomNumber:string;
  price:string;
  links:string;
}

var ROOMS:Room[] = [
  {
    "id" : "1",
    "roomNumber" : "100",
    "price" : "10",
    "links" : ""
  },
  {
    "id" : "2",
    "roomNumber" : "200",
    "price" : "20",
    "links" : ""
  },
  {
    "id" : "3",
    "roomNumber" : "300",
    "price" : "30",
    "links" : ""
  },
]