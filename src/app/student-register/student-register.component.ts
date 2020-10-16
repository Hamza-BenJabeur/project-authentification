import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-student-register',
  templateUrl: './student-register.component.html',
  styleUrls: ['./student-register.component.css'],
})
export class StudentRegisterComponent implements OnInit {
  constructor(private _http: HttpService) {}

  ngOnInit(): void {}
  collect(username, email, secretinfo, password, reppassword) {
    var obj = { username, email, secretinfo, password, reppassword };
    this._http.register(obj).subscribe((data) => {
      console.log(data);
    });
  }
}
