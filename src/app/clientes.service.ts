import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ICliente, IDadosCliente } from './app.component';
import { HttpClient, HttpParams } from '@angular/common/http';
import { share } from 'rxjs/operators';

@Injectable()
export class ClientesService {

  constructor(private http: HttpClient) { }

  buscarClientes(busca?: string): Observable<ICliente[]> {
    let params;
    if(busca){
      params = new HttpParams().set('cpf', busca);
      console.log("busca " + busca);
    }
    console.log("busca ...");
    return this.http.get<ICliente[]>('api/clientes', {params}).pipe(share());
  } 

  getDadosCliente(): Observable<IDadosCliente>{
    return this.http.get<IDadosCliente>('http://localhost:3000/pontos').pipe(share());
  }

}
