import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-company-register',
  templateUrl: './company-register.component.html',
  styleUrls: ['./company-register.component.css'],
})
export class CompanyRegisterComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  takedata(email, owner, field, numberOfEmployee, location, website, logo, about) {
    console.log("hahaha")
  };
}
