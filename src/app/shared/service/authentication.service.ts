import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { environment } from '../../../environments/environment';
import { UserDetail } from '../../public/login/model/user-detail';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private router: Router, private httpClient: HttpClient, private cookieService: CookieService) {
  }

  login(userDetail: UserDetail) {
    this.authorize(userDetail).then(data => {
      this.saveToken(data);
    }, err => {
      console.log('error', err);
      alert('Invalid Credentials');
    });
  }

  private authorize(userDetail: UserDetail) {
    return this.httpClient.post<any>(environment.apiUrl + 'auth/oauth/token',
      `grant_type=password&username=${userDetail.email}&password=${userDetail.password}&scope=READ WRITE`, {
        headers: new HttpHeaders({
          Authorization: `Basic ${btoa('web:pin')}`,
          'Content-Type': 'application/x-www-form-urlencoded'
        })
      }).toPromise();
  }

  saveToken(token) {
    const expireDate = new Date().getTime() + (1000 * token.expires_in);
    this.cookieService.set('access_token', token.access_token, expireDate);
    this.router.navigate(['/']);
  }

  checkCredentials() {
    if (!this.cookieService.check('access_token')) {
      this.router.navigate(['/login']);
    }
  }

  logout() {
    this.cookieService.delete('access_token');
    this.router.navigate(['/login']);
  }
}
