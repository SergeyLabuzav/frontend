import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress-ring',
  templateUrl: './progress-ring.component.html',
  styleUrls: ['./progress-ring.component.css']
})
export class ProgressRingComponent implements OnInit {
  @Input() radius = 60;
  @Input() progress = 0;
  @Input() stroke = 2;

  constructor() {
  }

  ngOnInit() {
  }

  getCircumference() {
    return this.getNormalizedRadius() * 2 * Math.PI;
  }

  getNormalizedRadius() {
    return this.radius - this.stroke * 2;
  }

  getRadius() {
    return this.radius;
  }

  getOffset() {
    return this.getCircumference() - this.progress / 100 * this.getCircumference();
  }
}
