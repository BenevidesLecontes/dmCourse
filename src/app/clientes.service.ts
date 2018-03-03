import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
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

  buscarClientes(query?: string): Observable<ICliente[]> {
    let params;
    if (!!query) {
      params = new HttpParams().set('nome', query);
    }
    return this.http.get<ICliente[]>('/api/clientes', {params}).pipe(share());
  }

  buscarPontos(): Observable<IPontos> {
    return this.http.get<IPontos>('/api/pontos').pipe(share());
  }

}
