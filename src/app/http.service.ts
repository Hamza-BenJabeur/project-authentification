import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
const headers = new HttpHeaders();
headers.set('Content-Type', 'application/json;charset=utf-8');

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private http: HttpClient) {}
  ROOT_URL = 'http://localhost:3000';

  registerCompanies(data) {
    return this.http.post(this.ROOT_URL + '/addCompany', data);
  }
  registerTC(data) {
    return this.http.post(this.ROOT_URL + '/addTC', data);
  }
  register(data) {
    return this.http.post(this.ROOT_URL + '/addStudents', data);
  }
  loginStudent(data) {
    return this.http.post(this.ROOT_URL + '/login', data);
  }
  loginCompanies(data) {
    return this.http.post(this.ROOT_URL + '/loginCompanies', data);
  }
  loginTC(data) {
    return this.http.post(this.ROOT_URL + '/loginTC', data);
  }

  httpRegister(obj) {
    console.log('this si inside ====>', obj);
    return this.http.post(this.ROOT_URL + `/api/users/registration`, obj);
  }

  httpSendVerificationRequest(name) {
    return this.http.post(
      this.ROOT_URL + '/api/users/sendVerificationRequest',
      name
    );
  }

  httpGetNonVerifiedStudents() {
    return this.http.get(this.ROOT_URL + '/api/users/getNonVerifiedStudents');
  }

  httpVerifyStudent(name) {
    return this.http.post(this.ROOT_URL + '/api/users/verifyStudent', name);
  }
  httprejectStudent(name) {
    return this.http.post(this.ROOT_URL + '/api/users/rejectStudent', name);
  }
}
