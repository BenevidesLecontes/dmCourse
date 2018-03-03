import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.scss']
})
export class ClientListComponent implements OnInit {
  @Input() cliente: any;

  constructor() { }

  ngOnInit() {
  }

}
