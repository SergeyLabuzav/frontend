import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';

@Injectable()
export class SecurityInterceptor implements HttpInterceptor {

  constructor(private cookieService: CookieService) {
  }

  static updateRequest(request: HttpRequest<any>, token: string) {
    return request.clone({
      headers: request.headers.set('Authorization', `Bearer ${token}`)
    });
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const accessToken = this.cookieService.get('access_token');

    if (accessToken) {
      return next.handle(SecurityInterceptor.updateRequest(request, accessToken));
    }
    return next.handle(request);
  }
}
