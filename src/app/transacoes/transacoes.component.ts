import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

const ELEMENT_DATA: any[] = [
  {loja: '---', nota: '---', cadastro: '---', valor: '---'}
];

@Component({
  selector: 'app-transacoes',
  templateUrl: './transacoes.component.html',
  styleUrls: ['./transacoes.component.scss']
})
export class TransacoesComponent implements OnInit {
  displayedColumns = ['loja', 'nota', 'cadastro', 'valor'];
  dataSource = ELEMENT_DATA;
  email = new FormControl('', [Validators.required, Validators.email]);

  @Output() emit: EventEmitter<string> = new EventEmitter<string>();

  constructor() {
  }

  ngOnInit() {
  }

  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
      this.email.hasError('email') ? 'Not a valid email' :
        '';
  }
}
