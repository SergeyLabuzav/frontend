import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { ActivationService } from '../service/activation.service';

@Injectable()
export class ActivationResolver implements Resolve<boolean> {

  constructor(private activationService: ActivationService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    const activationKey = route.queryParamMap.get('key');
    return this.activationService.activate(activationKey).pipe(
      map((result) => result === null),
      catchError((err, caught) => of(false))
    );
  }

}
