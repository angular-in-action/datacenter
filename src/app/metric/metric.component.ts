import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-metric',
  templateUrl: './metric.component.html',
  styleUrls: ['./metric.component.css']
})
export class MetricComponent {
  @Input() title: string;
  @Input() description: string;
  @Input('used') value: number;
  @Input('available') max: number;

  isDanger() {
    return this.value / this.max > 0.7;
  }
}
