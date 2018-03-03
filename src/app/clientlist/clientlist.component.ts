import { IClient } from './../app.component';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-clientlist',
  templateUrl: './clientlist.component.html',
  styleUrls: ['./clientlist.component.scss']
})
export class ClientlistComponent implements OnInit {
  @Input() client: IClient;

  constructor() { }

  ngOnInit() {
  }

}
