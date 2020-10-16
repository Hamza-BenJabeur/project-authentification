import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-send-requestfor-verification',
  templateUrl: './send-requestfor-verification.component.html',
  styleUrls: ['./send-requestfor-verification.component.css']
})
export class SendRequestforVerificationComponent implements OnInit {

  constructor(private _http : HttpService ,  private router: Router) { }
  name: any = "wala"; 
  ngOnInit(): void {
  }

  verificationReq() {
    this._http.httpSendVerificationRequest({username : this.name}).subscribe((data) => {
      this.router.navigateByUrl('/waiting');

    });
  }
  
}
