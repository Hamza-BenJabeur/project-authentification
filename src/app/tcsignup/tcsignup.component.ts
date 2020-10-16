import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
@Component({
  selector: 'app-tcsignup',
  templateUrl: './tcsignup.component.html',
  styleUrls: ['./tcsignup.component.css'],
})
export class TcsignupComponent implements OnInit {
  constructor(private _http: HttpService) {}

  ngOnInit(): void {}
  addTC(name, password) {
    var obj = { name, password };
    this._http.registerTC(obj).subscribe((data) => {
      console.log(data);
    });
  }
}
