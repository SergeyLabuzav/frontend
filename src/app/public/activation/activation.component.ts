import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-activation',
  templateUrl: './activation.component.html',
  styleUrls: ['./activation.component.css']
})
export class ActivationComponent implements OnInit {

  isActivated: boolean;

  constructor(activatedRoute: ActivatedRoute) {
    this.isActivated = activatedRoute.snapshot.data.isActivated;
  }

  ngOnInit() {
  }

}
