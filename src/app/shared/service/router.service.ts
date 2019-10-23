import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RouterService {

  constructor(private router: Router) { }

  navigateToHomePage() {
    console.log('navigateToHomePage');
    this.router.navigate(['/']);
  }

  navigateToLoginPage() {
    this.router.navigate(['/login']);
  }

  navigateToCreatePregnancyPage() {
    console.log('navigateToCreatePregnancyPage');
    this.router.navigate(['/new-pregnancy']);
  }
}
