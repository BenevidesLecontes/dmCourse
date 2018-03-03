import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-status-item',
  template: `
    <h6 class="status-label">{{statusLabel}}</h6>
    <p class="status-value">{{valor ? (valor | number) : '---'}}</p>
  `,
  styleUrls: ['./status-item.component.scss']
})
export class StatusItemComponent implements OnInit {
  @Input() statusLabel: string;
  @Input() valor: number;

  constructor() {
  }

  ngOnInit() {
  }

}
