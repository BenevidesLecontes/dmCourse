<<<<<<< HEAD
import {Component, ViewChildren, QueryList, OnInit, ViewChild} from '@angular/core';
import { ClientlistComponent } from './clientlist/clientlist.component';
import { ClientesService } from './clientes.service';
export interface ICliente{
  nome: string,
  email?: string, 
  cpf?: string,
  obs?: string
}
export interface IDadosCliente{
  saldo: number
  total?: number,
  utilizados?: number, 
  expirados?: number,
}
=======
import {AfterViewInit, Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {ClientlistComponent} from './clientlist/clientlist.component';
import {ClientesService} from './clientes.service';
import {filter, take} from 'rxjs/operators';

export interface ICliente {
  email?: string;
  nome: string;
  cpf?: string;
}

>>>>>>> origin/master
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
<<<<<<< HEAD
export class AppComponent implements OnInit {
  @ViewChild('clienteC') clienteComponent: ClientlistComponent;
  clientes: ICliente[];
  dadosCliente: IDadosCliente;
=======
export class AppComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('Cliente') clienteComponent: ClientlistComponent;
  clientes: ICliente[];
  labels = [
    'Saldo',
    'Histórico',
    'Utilizados',
    'Perdidos'
  ];
  mapLabels = {};
>>>>>>> origin/master

  constructor(private clientesService: ClientesService) {
  }

<<<<<<< HEAD
  addCliente(){
    this.clientes.push({nome: "Silvia Kreilis", email: "silvia@yahoo.com", cpf: "646464666" });
  }

  ngOnInit(){
    this.clientesService.buscarClientes().subscribe(lista => this.clientes = lista);
    this.clientesService.getDadosCliente().subscribe(dados => {
      this.dadosCliente = dados
//      this.dadosCliente.saldo = this.dadosCliente.total - (this.dadosCliente.utilizados + this.dadosCliente.expirados);
      this.dadosCliente.saldo = this.dadosCliente.total - this.dadosCliente.utilizados - this.dadosCliente.expirados;
//      this.dadosCliente.saldo = this.dadosCliente.total - 1;
    }
    );
    console.log(this.dadosCliente);
=======
  ngOnInit(): void {
    this.getData();
  }

  ngAfterViewInit(): void {
  }

  private getData() {
    this.clientesService.buscarClientes()
      .pipe(filter(res => !!res), take(1))
      .subscribe(lista => this.clientes = lista);
    this.clientesService.buscarPontos()
      .pipe(filter(res => !!res), take(1))
      .subscribe(pontos => {
        this.labels.forEach(label => {
          if (pontos.expirados && label === 'Perdidos') {
            this.mapLabels[label] = pontos.expirados;
          }
          if (pontos.total && label === 'Saldo') {
            this.mapLabels[label] = pontos.total - pontos.utilizados - pontos.expirados;
          }
          if (pontos.total && label === 'Histórico') {
            this.mapLabels[label] = pontos.total;
          }
          if (pontos.utilizados && label === 'Utilizados') {
            this.mapLabels[label] = pontos.utilizados;
          }
        });
      });
  }

  ngOnDestroy(): void {
>>>>>>> origin/master
  }

  ngAfterViewInit(){

  }



}
