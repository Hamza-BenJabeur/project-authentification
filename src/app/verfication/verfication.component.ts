import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-verfication',
  templateUrl: './verfication.component.html',
  styleUrls: ['./verfication.component.css']
})
export class VerficationComponent implements OnInit {
  
  constructor(private _http : HttpService) { }
  obj : any ; 
  ngOnInit(): void {
  }
  takedata(name, last, country, city, adressPostalCode, diving, dateOfBirth, placeOfBirth, nationality, education, facebook, language, skills, hobbies, image, summery) {
    this.obj = {
      name :name,  
      last : last ,
      country :country  ,
      city : city ,
      address : adressPostalCode ,
      licence : diving ,
      dateOfBirth :dateOfBirth ,
      placeOfBirth : placeOfBirth ,
      nationality :nationality  ,
      education :education ,
      facebook :  facebook ,
      skills : skills  ,
      languages :language  ,
      hobbies : hobbies,
      image : image ,
      summary : summery,
      username : "wala"
    }
    console.log(this.obj)
    this._http.httpRegister(this.obj).subscribe((data) => {
      console.log("done")
    });
  }
}


