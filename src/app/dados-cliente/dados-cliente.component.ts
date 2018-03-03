import { Component, OnInit, Input } from '@angular/core';
import { IDadosCliente } from '../app.component';
import { LOCALE_ID } from '@angular/core';

@Component({
  selector: 'app-dados-cliente',
  templateUrl: './dados-cliente.component.html',
  styleUrls: ['./dados-cliente.component.scss']
})
export class DadosClienteComponent implements OnInit {

  @Input() dadosCliente: IDadosCliente;

  constructor() { }

  ngOnInit() {
  }

}
