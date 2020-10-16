import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
@Component({
  selector: 'app-login-companies',
  templateUrl: './login-companies.component.html',
  styleUrls: ['./login-companies.component.css'],
})
export class LoginCompaniesComponent implements OnInit {
  constructor(private _http: HttpService) {}
  token: any = '';
  ngOnInit(): void {
    
    console.log('companies',localStorage.getItem('token'))
  }
  collectLogCompanies(name, password) {
    const obj = {
      name: name.value,

      password: password.value,
    };
    this._http.loginCompanies(obj).subscribe((data) => {
      this.token = data['token'];
      localStorage.setItem('token', this.token);
      console.log(localStorage.getItem("token"));
    });
    
  }
}
