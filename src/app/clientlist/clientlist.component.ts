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
  @Input() cliente: any;
<<<<<<< HEAD

=======
>>>>>>> origin/master
  constructor() { }

  ngOnInit() {
  }

}
