import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

const ELEMENT_DATA: any[] = [
  {loja: '---', numNota: '---', data: '---', valor: '---'}
];

@Component({
  selector: 'app-transacoes',
  templateUrl: './transacoes.component.html',
  styleUrls: ['./transacoes.component.scss']
})
export class TransacoesComponent implements OnInit {
  displayedColumns = ['loja', 'numNota', 'data', 'valor'];
  dataSource = ELEMENT_DATA;
  formTransacoes = new FormGroup({
    loja: new FormControl('', Validators.required),
    numNota: new FormControl(null, Validators.required),
    formaPagamento: new FormControl(),
    valor: new FormControl(null, Validators.required),
    data: new FormControl(null, Validators.required)
  });
  @Output() emit: EventEmitter<string> = new EventEmitter<string>();

  constructor() {
  }

  ngOnInit() {
  }

  getErrorMessage(controlName: string) {
    return this.formTransacoes.get(controlName)
      .hasError('required') ? 'Este campo é obrigatório' : '';
  }

  submit() {
    this.dataSource = [this.formTransacoes.value];
    this.formTransacoes.reset();
  }
}
