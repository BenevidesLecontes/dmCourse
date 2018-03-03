import { ClientlistComponent } from './../clientlist/clientlist.component';
import { IClient } from './../app.component';
import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {
  @Input() clients: IClient[];
  @Input() clientComponent: ClientlistComponent;
  @Output() removeCliente : EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  deleteClient(){
    const client = this.clientComponent ? this.clientComponent.client :undefined;

    if (this.clients && this.clients.length && client) {
      this.removeCliente.emit(this.clients.findIndex(item => item.nome === client.nome));
    }
  }

}
