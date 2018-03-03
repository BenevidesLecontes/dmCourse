import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ICliente, IDadosCliente } from './app.component';
import { HttpClient } from '@angular/common/http';
import { share } from 'rxjs/operators';

@Injectable()
export class ClientesService {

  constructor(private http: HttpClient) { }

  buscarClientes(): Observable<ICliente[]> {
    return this.http.get<ICliente[]>('http://localhost:3000/clientes').pipe(share());
  } 

  getDadosCliente(): Observable<IDadosCliente>{
    return this.http.get<IDadosCliente>('http://localhost:3000/pontos').pipe(share());
  }

}
