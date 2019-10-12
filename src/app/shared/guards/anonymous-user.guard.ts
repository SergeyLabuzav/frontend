import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { RouterService } from '../service/router.service';

@Injectable({
  providedIn: 'root'
})
export class AnonymousUserGuard implements CanActivate {
  constructor(private routerService: RouterService, private cookieService: CookieService) {
  }

  canActivate(): boolean {
    console.log('AnonymousUserGuard');
    if (this.cookieService.check('access_token')) {
      console.log('token', this.cookieService.get('access_token'));
      this.routerService.navigateToHomePage();
      return false;
    }
    return true;
  }
}
