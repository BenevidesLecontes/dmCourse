<<<<<<< HEAD
import { Component, OnInit, Input } from '@angular/core';
=======
import {Component, Input, OnInit} from '@angular/core';
>>>>>>> origin/master

@Component({
  selector: 'app-clientlist',
  templateUrl: './clientlist.component.html',
  styleUrls: ['./clientlist.component.scss']
})
export class ClientlistComponent implements OnInit {
<<<<<<< HEAD

  @Input() cliente: any;

=======
  @Input() cliente: any;
>>>>>>> origin/master
  constructor() { }

  ngOnInit() {
  }

}
