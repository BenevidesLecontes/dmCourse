import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ICliente } from '../app.component';
import { ClientlistComponent } from '../clientlist/clientlist.component';

@Component({
  selector: 'app-teste',
  templateUrl: './teste.component.html',
  styleUrls: ['./teste.component.scss']
})
export class TesteComponent implements OnInit {
  
  @Input() clientes: ICliente[];
  @Input() clienteComponent: ClientlistComponent;
  @Output() removeClienteEvento: EventEmitter<number> = new EventEmitter<number>(); 

  constructor() { }

  ngOnInit() {
  }

  removeCliente(){
    const clienteRemove = this.clienteComponent?this.clienteComponent.cliente:undefined;
    if(this.clientes && this.clientes.length > 0 && clienteRemove){
      this.removeClienteEvento.emit(this.clientes.findIndex(item => item.nome === clienteRemove.nome));
    }
  }
  
}
