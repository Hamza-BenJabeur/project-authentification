import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
@Component({
  selector: 'app-register-companies',
  templateUrl: './register-companies.component.html',
  styleUrls: ['./register-companies.component.css']
})
export class RegisterCompaniesComponent implements OnInit {

  constructor(private _http:HttpService) { }

  ngOnInit(): void {}
  collectCompanies(name,password) {
    var obj = { name, password};
    this._http.registerCompanies(obj).subscribe((data) => {
      console.log(data);
    });
  }

}
