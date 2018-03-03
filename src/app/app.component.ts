import {Component, OnInit, ViewChild, AfterViewInit} from '@angular/core';
import { ClientesService } from './clientes.service';
import { ClientlistComponent } from './clientlist/clientlist.component';
import { PontoClienteComponent } from './ponto-cliente/ponto-cliente.component';
import { PontosService } from './pontos.service';

export interface ICliente {
  email?: string,
  nome: string,
  cpf?: string
}

export interface IPonto {
  saldo?: number,
  total: number,
  utilizados: number,
  expirados: number
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {

  @ViewChild('Cliente') clientComponent: ClientlistComponent
  clientes: ICliente[];

  @ViewChild('Ponto') pontoComponent: PontoClienteComponent
  pontos: IPonto[];

  constructor(private clienteService: ClientesService, private pontosService: PontosService) {

  }

  ngOnInit(): void{
    this.clienteService.buscarClientes().subscribe(lista => this.clientes = lista);

    this.pontosService.buscarPontos().subscribe(obj =>{  
      obj.saldo = obj.total - obj.expirados - obj.utilizados;
      this.pontos = [];
      this.pontos.push(obj);
    });
    
  }

  ngAfterViewInit(): void{

  }

  addCliente(): void {
    this.clientes.push({nome: 'ernesto', email: 'ernesto@gmail.com'});
  }

  removeCliente(nome: string) {
    this.clientes = this.clientes.filter( cliente => cliente.nome !== nome );
  }

}
