import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ponto-cliente',
  templateUrl: './ponto-cliente.component.html',
  styleUrls: ['./ponto-cliente.component.scss']
})
export class PontoClienteComponent implements OnInit {

  @Input() ponto: any;

  constructor() {

  }

  ngOnInit() {

  }

}
