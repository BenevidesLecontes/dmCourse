import {Component, ViewChildren, QueryList, OnInit, ViewChild} from '@angular/core';
import { ClientlistComponent } from './clientlist/clientlist.component';
import { ClientesService } from './clientes.service';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
export interface ICliente{
  nome: string,
  email?: string, 
  telefone?: string, 
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
  formularioBusca: FormGroup;

  constructor(private clientesService: ClientesService, private fb: FormBuilder) {
  }

  addCliente(){
    this.clientes.push({nome: "Silvia Kreilis", email: "silvia@yahoo.com", cpf: "646464666" });
  }

  ngOnInit(){
    this.formularioBusca = this.fb.group({
      busca: new FormControl()
    }
  );
  this.clientesService.buscarClientes().subscribe(lista => this.clientes = lista);
    this.clientesService.getDadosCliente().subscribe(dados => {
      this.dadosCliente = dados
//      this.dadosCliente.saldo = this.dadosCliente.total - (this.dadosCliente.utilizados + this.dadosCliente.expirados);
      this.dadosCliente.saldo = this.dadosCliente.total - this.dadosCliente.utilizados - this.dadosCliente.expirados;
//      this.dadosCliente.saldo = this.dadosCliente.total - 1;
    }
    );
    //console.log(this.dadosCliente);

  }

  submitted(){
    this.clientesService.buscarClientes(this.formularioBusca.value.busca)
       .subscribe(x => this.clientes = x);
  }

  ngAfterViewInit(){

  }

}
