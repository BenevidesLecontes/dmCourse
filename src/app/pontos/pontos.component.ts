import { IPonto } from './../app.component';
import { PontosService } from './pontos.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pontos',
  templateUrl: './pontos.component.html',
  styleUrls: ['./pontos.component.scss']
})
export class PontosComponent implements OnInit {

  @Input() ponto: IPonto;

  constructor() { 
  }

  ngOnInit() {
  }

}
