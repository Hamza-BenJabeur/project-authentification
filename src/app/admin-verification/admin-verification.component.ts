import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-admin-verification',
  templateUrl: './admin-verification.component.html',
  styleUrls: ['./admin-verification.component.css']
})
export class AdminVerificationComponent implements OnInit {

  constructor(private _http: HttpService) { }

  NonValidStudents: any; 

  ngOnInit(): void {
    this.getData()
  }
  getData() {
    this._http.httpGetNonVerifiedStudents().subscribe((data) => {
      console.log(data)
      this.NonValidStudents = data 
    });
  }
  verifie(username) {
    this._http.httpVerifyStudent({username : username}).subscribe((data) => {
      this.getData()
    });
  }
  
  reject(username) {
    this._http.httprejectStudent({username : username}).subscribe((data) => {
      this.getData()
    });
  }
}
