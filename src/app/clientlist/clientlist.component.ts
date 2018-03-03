import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-clientlist',
  templateUrl: './clientlist.component.html',
  styleUrls: ['./clientlist.component.scss']
})
export class ClientlistComponent implements OnInit {
  @Input() cliente: any;
  @Input() first: boolean;
  classes = ['red', 'italico'];
  constructor() { }

  ngOnInit() {
  }

}
