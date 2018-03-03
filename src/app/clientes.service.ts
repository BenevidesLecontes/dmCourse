import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {ICliente} from './app.component';
import {share} from 'rxjs/operators';

export interface IPontos {
  total: number;
  utilizados: number;
  expirados: number;
}

@Injectable()
export class ClientesService {

  constructor(private http: HttpClient) {
  }

  buscarClientes(): Observable<ICliente[]> {
    return this.http.get<ICliente[]>('/api/clientes').pipe(share());
  }

  buscarPontos(): Observable<IPontos> {
    return this.http.get<IPontos>('/api/pontos').pipe(share());
  }

}
