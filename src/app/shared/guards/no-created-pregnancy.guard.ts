import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { PregnancyService } from '../service/pregnancy.service';
import { RouterService } from '../service/router.service';

@Injectable({
  providedIn: 'root'
})
export class NoCreatedPregnancyGuard implements CanActivate {

  constructor(private routerService: RouterService, private pregnancyService: PregnancyService) {
  }

  canActivate(): Observable<boolean> {
    return this.pregnancyService.fetchActive().pipe(map(response => {
      console.log('NoCreatedPregnancyGuard', response);
      if (response) {
        return true;
      } else {
        this.routerService.navigateToCreatePregnancyPage();
        return false;
      }
    }));
  }
}
