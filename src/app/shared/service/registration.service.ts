import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { UserRegistration } from '../../public/login/model/user-registration';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private httpClient: HttpClient) { }

  signUp(userRegistration: UserRegistration): Observable<void> {
    return this.httpClient.post<void>(environment.apiUrl + 'auth/oauth/account/create', userRegistration, {
      headers: new HttpHeaders({
        Authorization: `Basic ${btoa('mobile:pin')}`
      })
    });
  }
}
