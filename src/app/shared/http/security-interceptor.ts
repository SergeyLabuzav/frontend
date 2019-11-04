import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthenticationService } from '../service/authentication.service';

@Injectable()
export class SecurityInterceptor implements HttpInterceptor {

  constructor(private authenticationService: AuthenticationService) {
  }

  static addAuthenticationToken(request: HttpRequest<any>, token: string) {
    return request.clone({
      headers: request.headers.set('Authorization', `Bearer ${token}`)
    });
  }

  static updateBasicRequest(request: HttpRequest<any>) {
    return request.clone({
      headers: request.headers.set('Authorization', `Basic ${btoa('web:pin')}`)
    });
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // @ts-ignore
    return next.handle(this.getRequest(request)).pipe(catchError(error => {
      if (error instanceof HttpErrorResponse && error.status === 401) {
        return this.handle401Error(request, next);
      } else {
        return throwError(error);
      }
    }));
  }

  getRequest(request: HttpRequest<any>): HttpRequest<any> {
    const accessToken = this.authenticationService.getAccessToken();
    if (accessToken) {
      return SecurityInterceptor.addAuthenticationToken(request, accessToken);
    }
    return SecurityInterceptor.updateBasicRequest(request);
  }

  private handle401Error(request: HttpRequest<any>, next: HttpHandler) {
    const refreshToken = this.authenticationService.getRefreshToken();
    console.log('refreshToken', refreshToken);
    if (refreshToken) {
      console.log('refreshToken');
      this.authenticationService.refreshToken(refreshToken);
    } else {
      console.log('logout');
      this.authenticationService.logout();
    }
  }
}
