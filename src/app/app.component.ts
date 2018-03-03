import { PontosService } from './pontos/pontos.service';
import { ClientsService } from './clients.service';
import { ClientlistComponent } from './clientlist/clientlist.component';
import { Component, ViewChildren, QueryList, ViewChild, OnDestroy} from '@angular/core';
import { takeUntil } from 'rxjs/Operators';
import { ReplaySubject } from 'rxjs/ReplaySubject';

export interface IPonto{
  total: number,
  utilizados?: number,
  expirados?: number
}

export interface IClient{
  email?: string,
  nome: string,
  cpf?: string
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy {
  @ViewChild('cliente') clientComponent: ClientlistComponent;

  private destroyed$: ReplaySubject<boolean> = new ReplaySubject<boolean>(1);

  clients : IClient[];
  ponto : IPonto;

  constructor(private clientService: ClientsService,
            private pontosService: PontosService) {
    this.clientService.buscarClients().pipe(takeUntil(this.destroyed$)).subscribe(lista => this.clients = lista);
    this.pontosService.listarPontos().pipe(takeUntil(this.destroyed$)).subscribe(item => this.ponto = item);
  }

  addClient() {
    this.clients.push({email: "teste@dm.com", nome: "Teste"});
  }

  ngOnDestroy() {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }
}
