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
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  @ViewChild('clienteC') clienteComponent: ClientlistComponent;
  clientes: ICliente[];
  dadosCliente: IDadosCliente;

  constructor(private clientesService: ClientesService) {
  }

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
  }

  ngAfterViewInit(){

  }



}
