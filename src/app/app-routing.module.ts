import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { from } from 'rxjs';
import { VerficationComponent } from './verfication/verfication.component';
import { SendRequestforVerificationComponent } from './send-requestfor-verification/send-requestfor-verification.component';
import { AdminVerificationComponent } from './admin-verification/admin-verification.component';
import { WaitingComponent } from './waiting/waiting.component';
import { LandingComponent } from './landing/landing.component';
import { CompanyRegisterComponent } from './company-register/company-register.component';
import { StudentRegisterComponent } from './student-register/student-register.component';
import { StudentLoginComponent } from './student-login/student-login.component';
import { RegisterCompaniesComponent } from './register-companies/register-companies.component';
import { LoginCompaniesComponent } from './login-companies/login-companies.component';
import { TcsignupComponent } from './tcsignup/tcsignup.component';
import { LoginTCComponent } from './login-tc/login-tc.component';
const routes: Routes = [
  { path: 'verification', component: VerficationComponent },
  { path: 'send', component: SendRequestforVerificationComponent },
  { path: 'admin', component: AdminVerificationComponent },
  { path: 'waiting', component: WaitingComponent },
  { path: '', component: LandingComponent },
  { path: 'comp', component: CompanyRegisterComponent },
  { path: 'singup', component: StudentRegisterComponent },
  { path: 'login', component: StudentLoginComponent },
  { path: 'signup', component: RegisterCompaniesComponent },
  { path: 'logCompanies', component: LoginCompaniesComponent },
  { path: 'signupTC', component: TcsignupComponent },
  { path: 'loginTC', component: LoginTCComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
