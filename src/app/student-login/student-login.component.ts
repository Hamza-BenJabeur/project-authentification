import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-student-login',
  templateUrl: './student-login.component.html',
  styleUrls: ['./student-login.component.css'],
})
export class StudentLoginComponent implements OnInit {
  constructor(private _http: HttpService) {}
  token: any = '';
  ngOnInit(): void {
    localStorage.getItem('token');
  }
  collectLog(username, password) {
    const obj = {
      username: username.value,

      password: password.value,
    };
    this._http.loginStudent(obj).subscribe((data) => {
      this.token = data['token'];
      localStorage.setItem('token', this.token);
    });
  }
}
