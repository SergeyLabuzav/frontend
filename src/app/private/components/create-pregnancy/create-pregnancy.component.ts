import { Component, OnInit } from '@angular/core';
import { PregnancyService } from '../../../shared/service/pregnancy.service';
import { RouterService } from '../../../shared/service/router.service';

@Component({
  selector: 'app-create-pregnancy',
  templateUrl: './create-pregnancy.component.html',
  styleUrls: ['./create-pregnancy.component.css']
})
export class CreatePregnancyComponent implements OnInit {

  period: number;

  constructor(private pregnancyService: PregnancyService, private routerService: RouterService) { }

  ngOnInit() {
  }

  create() {
    this.pregnancyService.save(this.period).subscribe( result => this.routerService.navigateToHomePage());
  }
}
