import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
@Component({
  selector: 'app-login-tc',
  templateUrl: './login-tc.component.html',
  styleUrls: ['./login-tc.component.css'],
})
export class LoginTCComponent implements OnInit {
  constructor(private _http: HttpService) {}
  token: any = '';
  ngOnInit(): void {
    console.log('companies', localStorage.getItem('token'));
  }
  loginTC(name, password) {
    const obj = {
      name: name.value,

      password: password.value,
    };
    this._http.loginTC(obj).subscribe((data) => {
      this.token = data['token'];
      localStorage.setItem('token', this.token);
      console.log(localStorage.getItem('token'));
    });
  }
}
