import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, CanLoad } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { RouterService } from '../service/router.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticatedUserGuard implements CanLoad, CanActivate, CanActivateChild {
  constructor(private routerService: RouterService, private cookieService: CookieService) {
  }

  canLoad(): boolean {
    return this.validateAuthentication();
  }

  canActivate(): boolean {
    return this.validateAuthentication();
  }

  canActivateChild(): boolean {
    return this.validateAuthentication();
  }

  private validateAuthentication(): boolean {
    if (!this.cookieService.check('access_token')) {
      this.routerService.navigateToLoginPage();
      return false;
    }
    return true;
  }
}
