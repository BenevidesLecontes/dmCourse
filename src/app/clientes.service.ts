import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { ICliente } from './app.component';
import { share } from 'rxjs/operators';

@Injectable()
export class ClientesService {

  constructor(private http: HttpClient) { 

  }

  buscarClientes(): Observable<ICliente[]>{
    return this.http.get<ICliente[]>('http://localhost:3000/clientes').pipe(share());
  }

}

