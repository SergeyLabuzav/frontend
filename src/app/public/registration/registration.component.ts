import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { EMAIL_ALREADY_USED_ERROR, LOGIN_ALREADY_USED_ERROR } from '../../shared/constants/error.constants';
import { UserRegistration } from '../login/model/user-registration';
import { RegistrationService } from '../../shared/service/registration.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  confirmPassword: string;
  doNotMatch: string;
  error: string;
  errorEmailExists: string;
  errorUserExists: string;
  success: boolean;

  userDetail: UserRegistration = new UserRegistration(null, null, null);

  constructor(private registrationService: RegistrationService) { }

  ngOnInit() {
  }

  login() {
    if (this.userDetail.password !== this.confirmPassword) {
      this.doNotMatch = 'ERROR';
    } else {
      this.doNotMatch = null;
      this.error = null;
      this.errorUserExists = null;
      this.errorEmailExists = null;
      this.registrationService.signUp(this.userDetail).subscribe(
        () => this.success = true,
        response => this.processError(response)
      );
    }
  }

  private processError(response: HttpErrorResponse) {
    console.log('response', response);
    this.success = null;
    if (response.status === 400 && response.error.error === LOGIN_ALREADY_USED_ERROR) {
      this.errorUserExists = 'ERROR';
    } else if (response.status === 400 && response.error.error === EMAIL_ALREADY_USED_ERROR) {
      this.errorEmailExists = 'ERROR';
    } else {
      this.error = 'ERROR';
    }
  }
}
